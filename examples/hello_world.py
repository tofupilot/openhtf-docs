import openhtf as htf

# Import this output mechanism as it's the specific one we want to use.
from openhtf.output.callbacks import json_factory

from openhtf.plugs import user_input


# The @htf.measures annotation notifies the OpenHTF framework that this test
# phase will be taking a measurement that we'd like to call
# 'hello_world_measurement'.  Measurements can be accessed and set via
# the 'test' object, always passed as the first argument to test phases.
@htf.measures(htf.Measurement("hello_world_measurement"))
def hello_world(test):
    """A hello world test phase."""
    # At the heart of an OpenHTF test script are the test phases, such as
    # this one.  Any callable can be used as a test phase, so long as it
    # accepts a single argument that is the 'test' object.  This test object
    # is how you will interact with the OpenHTF test framework once a test is
    # running.  See other examples for more complex cases, but here is a good
    # example of the sort of minimal functionality you're likely to use.

    # The test.logger attribute is a Python logger instance that is configured
    # to log to the test record we will output at the end of the test.  This
    # is the recommended way to do any logging within test phases (this is also
    # how to get logs to show up in the frontend).
    test.logger.info("Hello World!")

    # As described above, this is how measurements are set.  The value that has
    # been set can also be accessed, but should only be set once (this will be
    # enforced in the future, for now it's best-practice).
    test.measurements.hello_world_measurement = "Hello Again!"


def main():
    # We instantiate our OpenHTF test with the phases we want to run as args.
    # Multiple phases would be passed as additional args, and additional
    # keyword arguments may be passed as well.  See other examples for more
    # complex uses.
    test = htf.Test(hello_world)

    # In order to view the result of the test, we have to output it somewhere,
    # and a local JSON file is a convenient way to do this.  Custom output
    # mechanisms can be implemented, but for now we'll just keep it simple.
    # This will always output to the same ./hello_world.json file, formatted
    # slightly for human readability.
    test.add_output_callbacks(
        json_factory.OutputToJSON("./{dut_id}.hello_world.json", indent=2)
    )

    # prompt_for_test_start prompts the operator for a DUT ID, a unique identifier
    # for the DUT (Device Under Test).  OpenHTF requires that a DUT ID is set
    # each time a test is executed.  It may be set programmatically, but the
    # simplest way to get one is to prompt the user for it.  If test_start is
    # not provided, the test will start immediately and assume the DUT ID will
    # be set later (OpenHTF will raise an exception when the test completes if
    # a DUT ID has not been set).
    test.execute(test_start=user_input.prompt_for_test_start())


if __name__ == "__main__":
    main()
