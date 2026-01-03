from result_prediction import magic_prediction, actualizar_suma_parcial

def main():
    turno = 1
    print("*" * 50)
    print(f"Turno #{turno}")

    n1 = int(input("Ingresa un número de dos o más cifras: "))

    # Inicialización del estado (UNA sola vez)
    prediction, suma_parcial = magic_prediction(n1)

    print("Toradamus calculando ...")
    print(f"El resultado de la suma será {prediction}")

    # Proceso dinámico
    while suma_parcial < prediction:
        print("*" * 50)
        turno += 1
        print(f"Turno #{turno}")

        n2 = int(
            input("Ingresa otro número con la misma cantidad de cifras que el primero: ")
        )

        # Un turno = una transición de estado
        suma_parcial, n_pc = actualizar_suma_parcial(n2, suma_parcial)

        print("-" * 50)
        print(
            f"El Jugador ingresó el número {n2}\n"
            f"Toradamus ingresó el número {n_pc}"
        )
        print(f"Suma parcial actual = {suma_parcial}\n")

    print("🎉" * 50)
    print(
        "¡Toradamus adivinó el resultado correcto!\n"
        f"Suma final = {suma_parcial}"
    )


if __name__ == "__main__":
    main()
