import openhtf as htf
import logging
from openhtf.util import configuration
from openhtf.output.callbacks import json_factory


CONF = configuration.CONF

# Load from external file
CONF.load_from_file("config.yaml")


@htf.measures(htf.Measurement("voltage"))
def voltage_measurement(test):
    voltage_limit = CONF.voltage_limit
    test.logger.info("Voltage limit: %s", voltage_limit)

    voltage = 4.5  # Example voltage within limit
    test.measurements.voltage = voltage

    test.logger.info("Completed voltage measurement phase.")


def main():
    logging.basicConfig(level=logging.INFO)
    test = htf.Test(voltage_measurement)
    test.add_output_callbacks(
        json_factory.OutputToJSON("./test_results.json", indent=2)
    )
    test.execute(test_start=lambda: "DeviceUnderTest123")


if __name__ == "__main__":
    main()
