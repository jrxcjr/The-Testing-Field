how_many_cylinders = input("how many cylinders does the engine have?  ")
print("nice, it has " + how_many_cylinders + " cylinders ")
measuring_unit = input("what is your preferred unit of measuring ? in or mil ")
cylinder_stroke = input('what is the cylinder stroke? input in your desired unit ')
if measuring_unit == "in":
    float(cylinder_stroke)
cylinder_bore = input("what is the cylinder bore? input in your desired unit ")
if measuring_unit == "in":
    float(cylinder_bore)
    print("it has " + str(cylinder_bore) + "in of bore and " + str(cylinder_stroke) + "in of stroke ")
elif measuring_unit == "mil":
    print("it has " + str(cylinder_bore) + "mm of bore and " + str(cylinder_stroke) + "mm of stroke ")
engine_capacity_in = ((float(cylinder_bore)*float(cylinder_stroke)*float(how_many_cylinders))*2.6)
engine_capacity_mil = float(cylinder_bore)*float(cylinder_stroke)*float(how_many_cylinders)
# engine capacity is the multiplication between cylinder bore, cylinder stroke and the number of cylinders
if measuring_unit == "in":
    print("your engine has " + str(engine_capacity_in) + " ci's of capacity")
elif measuring_unit == "mil":
    print("your engine has " + str(engine_capacity_mil) + " cc's of capacity")
