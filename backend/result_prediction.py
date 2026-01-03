def magic_prediction(n:int) -> tuple:
    """Calcula la suma de 1998 a cualquier número entero
        Parámetros:
                    n(int) número entero de dos o más cifras
        Retorna:
                    la suma de 1998 con el entero n dado y la suma parcial
    """
    prediction = 0
    suma_parcial = 0

    if n >= 10:
        prediction += 1998 + n
        suma_parcial += n
        return  prediction, suma_parcial
    else:
        raise ValueError("Ingresa un número entero de dos o más cifras")


def actualizar_suma_parcial(n2: int, suma_parcial:int):
    """
    Esta función actualiza la suma parcial partiendo de el primer número dado y determina el numero que el pC debe proponer
    parametro n2(int):
                    recibe un número entero n2 con la misma cantidad de cifras que el primer número n
    parametro suma_parcial(int):
                        recibe la suma parcial calculada con la función magic_prediction
    Retorno:
            Retorna la suma parcial actual y el valor calculado por el PC.
            Para alcanzar la predicción es necesario que n_pc y n2 siempre sumen 999
    """
    n_pc = 0
    suma_parcial = suma_parcial
    if n2 >= 10:
        n_pc += 999 - n2
        suma_parcial += (n2 + n_pc)
        return  suma_parcial, n_pc
    else:
        raise ValueError("Ingresa un número entero con la misma cantidad de cifras que el primer número")


