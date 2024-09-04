import openhtf as htf
from openhtf.plugs.user_input import UserInput
from openhtf.output.callbacks import json_factory


# Define the test phases
@htf.measures(htf.Measurement("operator_name").doc("Name of the operator"))
@htf.plug(user_input=UserInput)
def ask_operator_name(test, user_input):
    operator_name = user_input.prompt(message="Please enter your name:")
    test.measurements.operator_name = operator_name


@htf.measures(
    htf.Measurement("test_voltage").doc("Voltage to test (in volts)").in_range(0, 240)
)
@htf.plug(user_input=UserInput)
def ask_test_voltage(test, user_input):
    test_voltage = user_input.prompt(
        message="Please enter the test voltage (in volts):", text_input=False
    )
    try:
        test_voltage = float(test_voltage)
        test.measurements.test_voltage = test_voltage
    except ValueError:
        test.logger.error("Invalid voltage entered, must be a number.")
        return htf.PhaseResult.FAIL_AND_CONTINUE


@htf.measures(htf.Measurement("led_color").doc("LED color to test"))
@htf.plug(user_input=UserInput)
def ask_led_color(test, user_input):
    led_color = user_input.prompt(
        message="Please select the LED color to test (Red/Green/Blue):"
    )
    if led_color not in ["Red", "Green", "Blue"]:
        test.logger.error("Invalid color selected.")
        return htf.PhaseResult.FAIL_AND_CONTINUE
    test.measurements.led_color = led_color


@htf.measures(htf.Measurement("confirmation").doc("Operator confirmation"))
@htf.plug(user_input=UserInput)
def ask_confirmation(test, user_input):
    confirmation = user_input.prompt(
        message='Type "CONFIRM" to confirm the above information:'
    )
    if confirmation != "CONFIRM":
        test.logger.error("Operator did not confirm the information.")
        test.measurements.confirmation = False
        return htf.PhaseResult.FAIL_AND_CONTINUE
    test.measurements.confirmation = True


# Define the test
def user_input_test():
    return htf.Test(
        ask_operator_name, ask_test_voltage, ask_led_color, ask_confirmation
    )


if __name__ == "__main__":
    test = user_input_test()
    test.add_output_callbacks(json_factory.OutputToJSON("./test_output.json"))
    test.execute(test_start=lambda: "test-uid-1234")
