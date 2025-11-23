my_variable=42
print(my_variable)
print(id(my_variable))


my_other_variable=my_variable
print(my_other_variable)

my_variable=45
print(my_variable)
print(id(my_variable))
print(id(my_other_variable))
