
.. _criteria-label:

## Defining Test Criteria

The criteria refer to the thresholds against which measures are compared to declare a test case PASS or FAIL. In the spintop-openhtf context, the measures module implements the criteria and the comparison against the selected values.

To define a test criterion, first define an openhtf measurement object. 

```python
import openhtf as htf
criterion = htf.Measurement('test_criterion').in_range(18, 22)
```

Here the criterion defined will return a PASS if the value evaluated is between 18 and 22. The criterion name is "test_criterion" and it has been stored in the *criterion* variable.

Use the htf.measures decorator to use the defined criterion in a test case. 

```python
@plan.testcase('Criteria test')
@htf.measures(criterion)
def criteria_test(test): 
    value = 20
    test.measurements.test_criterion = 	value	
    
```

The criterion object is loaded in the openhtf measures. To evaluate a value against the test criterion, simply equate the value to the criterion. Note that the criterion name ("test_criterion") is used and not the object variable. 


Add the defined criteria and test case to your latest test bench and run it. You will see that the new test phase called *Criteria test* has passed. 

 ![Pass Indication](img/criteria-pass.png)

Hit expand all on the Phases box and see that the evaluated criteria has been added to the test phase result. 

 ![Pass Expanded](img/criteria-pass-expanded.png)

Modify the value in the test case code to use a value outside of the criteria range.
```python
@plan.testcase('Criteria test')
@htf.measures(criterion)
def criteria_test(test): 
    value = *12*
    test.measurements.test_criterion = value	
    
```

Run the test bench again. The phase will now fail. 

 ![Pass Expanded](img/criteria-fail-expanded.png)


:download:`Tutorial source <../tutorials/main_criteria.py>`


## Criteria types

In the example above, a range was defined to instanciate the criteria. Multiple different validator types can be used instead of the range function.

A good practice is to use a validator function which will return *True* or *False* depending on the value evaluated. For example, our range criteria can be defined in another manner as

```python
def range_validator(value):
  return 18 =< value =< 22

criterion = htf.Measurement('test_criterion').with_validator(range_validator)
```

However, doing so will remove the pretty-printing of the validator. For example, the built-in `in_range` validator will print out as "{min} < x < {max}".

Using the with_validator function helps you create complex criteria that match your exact needs.

For more details on the different types of criteria that can be implemented please refer to the Measurements reference

## Documentation

It is possible to add documentation to the criterion with the *doc()* function

```python
criterion = htf.Measurement('test_criterion').in_range(18, 22)
                    .doc('This measurement helps illustrate the criteria usage in spintop-openhtf')
```

## Using a criteria definition file

As we have seen in the :ref:`structure-label` tutorial , we believe it is a good practice to seperate the criteria definition from the actual test logic of the test bench. This guideline is proposed because it allows the modification and the tracking of all criteria in a single emplacement. It also eliminates the duplication of criteria. 

To this purpose, we propose to create a file called, for example, *criteria.py*. In this file a function called *get_criteria()* takes the criterion name as argument and returns the criterion which the **@htf.measures** decorator uses. 

Create the file and implement the function as described below.

```python
import openhtf as htf

def get_criteria(criterion):
	criteria_dict = {
			"test_criterion":    htf.Measurement('test_criterion').in_range(18,22)
			}
     
	return criteria_dict[criterion]

```

The python dictionary acts as a criteria switch case. The function selects the required measurement object and returns it to the caller.

In your test bench, use the function in the **@htf.measures** decorator to load the criteria and use it directly.

```python
from criteria import get_criteria

@plan.testcase('Criteria test')
@htf.measures(get_criteria('test_criterion'))
def criteria_test(test): 
    value = 20
    test.measurements.test_criterion = value	
```    

Run the test bench again and the result should be the same as was obtained above.

:download:`Tutorial source <../tutorials/main_criteria_w_file.py>`

:download:`Criteria file <../tutorials/criteria.py>`


## Dynamic Test Criteria

Test criteria can be defined dynamically in the test logic. Two major reasons do so are:

- To create criteria based on the product definition configuration

- To create criteria based on previous results or measurements

### Defining a Dynamic Test Criterion

To define a dynamic criterion, use the htf.Measurement function as in the static definitions, but instead as defining it as a function decorator, create a new entry in the *state.running_phase_state.measurements* dictionary. Also, the test case must have access to the *state* object. To do so, 

- Add the *requires_state=True* attribute to the testcase defintion decorater
- Instead of passing the *test* variable to the test case function, the *state* variable must be passed.
- For the evaluation of the test criterion, the measurements dictionary must be accessed from the *state* object instead of the *test* objects (state.test_api.measurements)


```python
@plan.testcase('Dynamic Criterion Test', requires_state=True)
def criteria_test(state):
    value = 12
    state.running_phase_state.measurements['VOLTAGE'] = htf.Measurement('VOLTAGE').
                        in_range(11.5,12.5)
    state.test_api.measurements.VOLTAGE = value
```    

### Based on a product defintion

A good example of a criterion based on a product definition is a criterion defined around the input voltage of a device. For example, the product defintion states that the input voltage is 12V. A criterion defined around the voltage would state that a measure of 12V +/- 0.5 Volts would indicate a PASS. 

First create a file name product.py, and implement the voltage definition within it.

```python
class voltage():
    input_voltage = 12

```    

Then define the dynamic criterion importing the value from the product definition.

```python
from product import voltage

@plan.testcase('Dynamic Criterion Test from Product Definition', requires_state=True)
def product_definition_test(state):

    #value = measure_input_voltage()
    value = 12

    #definition of criterion
    state.running_phase_state.measurements['VOLTAGE'] = htf.Measurement('VOLTAGE').
                    in_range(voltage.input_voltage - 0.5, voltage.input_voltage + 0.5)

                    
    #evaluation of criterion
    state.test_api.measurements.VOLTAGE = value	
```    

### Based on a previous measurement

The same method can be used to define a criterion from a previous measurement. For example, testing a voltage divider, which has been set to produce a voltage 30% of the input voltage. The input voltage has been measured as 12.05 volts. To create the divided voltage criterion, the measured value must be used in its definition, not the nominal value.

```python
@plan.testcase('Dynamic Criterion Test from Previous Measurement', requires_state=True)
def previous_measurement_test(state):

    #measured_input = measure_input_voltage()
    measured_input = 12.05 
    
    #divider_voltage = measure_divider_voltage()
    divider_voltage = 3.55
    
    #definition of criterion as within +/- 5% of the divider voltage, which is 30% on the measured input
    state.running_phase_state.measurements['DIVIDER_VOLTAGE'] = htf.Measurement('DIVIDER_VOLTAGE').
                    in_range(measured_input * 0.3 * 0.95, measured_input * 0.3 * 1.05)
    
    #evaluation of criterion
    state.test_api.measurements.DIVIDER_VOLTAGE = divider_voltage	
    	
```    


:download:`Tutorial source <../tutorials/main_criteria_dynamic.py>`

:download:`Product Definition file <../tutorials/product.py>`