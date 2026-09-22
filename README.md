# Interactive Productivity Dashboard
This project is a web-based dashboard built for WEB-115 to demonstrate interactive JavaScript features.
## TODO: Future Enhancements
- [ ] Add a metric conversion tool
- [ ] Integrate a task list with array storage
- [ ] Add JavaScript logic for a live clock
## Imperial/Metric Converter

This dashboard includes an Imperial/Metric Converter that lets users convert between common Imperial and metric length units. Users can enter a numeric value and select a conversion type for inches, feet, yards, miles, centimeters, meters, and kilometers. The converter displays the converted value along with the original and resulting units.

### Logic and Pseudocode

START

GET the numeric value entered by the user

GET the selected conversion type

CONVERT the entered value into a number

IF the entered value is not a valid number
    DISPLAY "Please enter a valid number."
ELSE IF the conversion type is inches to centimeters
    MULTIPLY the value by 2.54
    DISPLAY the value in centimeters
ELSE IF the conversion type is centimeters to inches
    DIVIDE the value by 2.54
    DISPLAY the value in inches
ELSE IF the conversion type is feet to meters
    MULTIPLY the value by 0.3048
    DISPLAY the value in meters
ELSE IF the conversion type is meters to feet
    DIVIDE the value by 0.3048
    DISPLAY the value in feet
ELSE IF the conversion type is yards to meters
    MULTIPLY the value by 0.9144
    DISPLAY the value in meters
ELSE IF the conversion type is meters to yards
    DIVIDE the value by 0.9144
    DISPLAY the value in yards
ELSE IF the conversion type is miles to kilometers
    MULTIPLY the value by 1.609344
    DISPLAY the value in kilometers
ELSE IF the conversion type is kilometers to miles
    DIVIDE the value by 1.609344
    DISPLAY the value in miles
END IF

END