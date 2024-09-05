import openhtf as htf
from openhtf.output.callbacks import json_factory
from openhtf.util import validators


@htf.measures(
    "frequency",
    docstring="Frequency measurement",
    units=htf.units.HERTZ,
    validators=[validators.in_range(0, 10)],
)
@htf.measures("status", docstring="Status message")
def inline_phase(test):
    test.measurements.frequency = 15  # Hertz (out of valid range)
    test.measurements.status = "This one is unvalidated."


def main():
    test = htf.Test(inline_phase)
    test.add_output_callbacks(
        json_factory.OutputToJSON(
            "test_result2.json",  # The name of the output file
            indent=2,  # Pretty-printing the JSON with an indentation of 2 spaces
        )
    )
    test.execute(lambda: "DeviceUnderTest123")


if __name__ == "__main__":
    main()
