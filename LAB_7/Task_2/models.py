class Vehicle:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year

    def start_engine(self):
        return f"{self.brand} {self.model}: engine started."

    def move(self):
        return f"{self.brand} {self.model} is moving."

    def get_info(self):
        return f"Brand: {self.brand}, Model: {self.model}, Year: {self.year}"

    def __str__(self):
        return f"{self.year} {self.brand} {self.model}"


class Car(Vehicle):
    def __init__(self, brand, model, year, fuel_type):
        super().__init__(brand, model, year)
        self.fuel_type = fuel_type

    def move(self):
        return f"{self.brand} {self.model} is driving on the road."

    def open_trunk(self):
        return f"{self.brand} {self.model}: trunk is open."

    def get_info(self):
        return f"{super().get_info()}, Fuel type: {self.fuel_type}"


class Motorcycle(Vehicle):
    def __init__(self, brand, model, year, has_sidecar):
        super().__init__(brand, model, year)
        self.has_sidecar = has_sidecar

    def move(self):
        return f"{self.brand} {self.model} is riding through traffic."

    def do_wheelie(self):
        return f"{self.brand} {self.model} is doing a wheelie!"

    def get_info(self):
        sidecar_status = "Yes" if self.has_sidecar else "No"
        return f"{super().get_info()}, Has sidecar: {sidecar_status}"