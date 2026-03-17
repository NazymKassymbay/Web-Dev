from models import Vehicle, Car, Motorcycle


def main():
    vehicle = Vehicle("Toyota", "Corolla", 2020)
    car = Car("BMW", "M5", 2023, "Petrol")
    motorcycle = Motorcycle("Yamaha", "R1", 2022, False)

    vehicles = [vehicle, car, motorcycle]

    print("=== VEHICLE INFORMATION ===")
    for item in vehicles:
        print(item)
        print(item.get_info())
        print(item.start_engine())
        print(item.move())   # polymorphism
        print("-" * 40)

    print("=== UNIQUE METHODS ===")
    print(car.open_trunk())
    print(motorcycle.do_wheelie())


if __name__ == "__main__":
    main()