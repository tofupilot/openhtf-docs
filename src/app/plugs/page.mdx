.. _plugs-label:

## About Plugs

Plugs are an OpenHTF concept. The OpenHTF team defines them as follow:

> The essence of an OpenHTF test is to interact with a DUT to exercise it in various ways and observe the result. Sometimes this is done by communicating directly with the DUT, and other times it's done by communicating with a piece of test equipment to which the DUT is attached in some way. A **plug** is a piece of code written to enable OpenHTF to interact with a particular type of hardware, whether that be a DUT itself or a piece of test equipment.

Technically, plugs are a Python class that is instanciated once per test and shared between test phases. They have a strong sense of *cleanup* that allows them to execute specific teardown actions regardless of the test outcome.

Although OpenHTF references hardware directly, plugs are also used in various roles that are non-related to hardware, such as user input. Overall, a better explanation would be that they are used for resources that are shared by test cases:

- Plugs for test equipments
- Plugs for DUT interfacing, which can be subdivised in some cases:
    - COM Interface
    - SSH Interface
    - Etc.
- Plugs for user input
- Plugs for custom frontend interaction
- Plugs for sharing test context, such as calibration performed over multiple test cases

## Using Plugs

Using plugs in spintop-openhtf is pretty straightforward. Let's take the UserInput plug as example since it is used in pretty much all tests.

1. First, the plug must be imported.
    ```python
    from openhtf.plugs.user_input import UserInput
    ```

2. Then, on testcases that require this plug, the plug decorator must be used.

    ```python
    from openhtf.plugs.user_input import UserInput
    from spintop_openhtf import TestPlan

    plan = TestPlan('mytest')

    @plan.testcase('TEST1')
    @plan.plug(prompt=UserInput) # 'prompt' is user-defined
    def test_1(test, prompt): # prompt will contain an instance of UserInput

    ```

The *class* of the plug is used as argument to the plug decorator. **This is important**. The executor will instantiate an instance of the class and use the same object across a test run. **On each new test, the plug will be re-instantiated.**

.. warning:: 
    You choose the name you want to give to the argument. The name must have a match in the function definition. For example, **the following would FAIL**:

```python

# Will complain that 'prompt' is not an argument
@plan.testcase('TEST1')
@plan.plug(prompt=UserInput) 
def test_1(test, user_input): # WRONG. No user_input argument exists

```

## Creating Plugs

Creating plugs is the basis of reusing interface functionnalities. As an example, we will create a plug that copies a file from a source folder to a destination.

### Base Structure

Every plug must inherit from `BasePlug`. Moreover, the `__init__` method must take no arguments. The following excerpt illustrates the plug definition

```python

import shutil

from openhtf.plugs import BasePlug

class FileCopier(BasePlug):
    def copy_file(self, source_file, destination_folder):
        shutil.copy(source_file, destination_folder)

```

The following excerpt instanciates the plug in a test case.

```python

@plan.testcase('File Copy Test')
@plan.plug(copy_plug=FileCopier) 
def file_copy_test(test, copy_plug): 
    copy_plug.copy_file(source, destination)

```

:download:`Tutorial source <../tutorials/main_plug.py>`



## Wrapping spintop-openhtf Plugs

A typical manner of creating custom plugs for a test bench is to wrap an existing, spintop-openhtf plug, to add applicative functionalities to it. 

For example, a linux shell plug specific to a product can be created by wrapping the spintop-openhtf comport plug. The plug adds typical linux features to the comport plug such as login, file read, file copy, etc. 

The plug is created

```python
from spintop_openhtf.plugs.iointerface.comport import ComportInterface

class LinuxPlug(ComportInterface):

    def __init__(self, comport, baudrate=115200):
		super().__init__(comport, baudrate)
        
	def login(self, username):
		return self.com_target("{}".format(username), '{}@'.format(username), timeout=10, keeplines=0)	
        
	def file_read(self, file):
		return self.com_target("cat {}".format(file), '@', timeout=10, keeplines=0)	
        
	def file_copy(self, source, destination):
		return self.com_target("cp {} {}".format(source, destination), '@', timeout=10, keeplines=0)	
``` 

and imported in a test case

```python
linux_plug = LinuxPlug.as_plug( 'linux_plug', comport='COM5',  baudrate=115200)

@plan.testcase('Linux_Test')
@plan.plug(linux=linux_plug)
def LinuxTest(test, linux):
	try:
		linux.open_with_log()
		test.logger.info ("COM Port open")
        print(linux.file_read('file.txt'))
        linux.file_copy('file.txt',destination)
	except:
		test.logger.info ("COM Port open failed")
		return PhaseResult.STOP

```