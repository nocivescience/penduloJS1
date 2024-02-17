import numpy as np

# Crear un array de ángulos en grados
angle_range = np.array([0, 45, 90, 135, 180])

# Calcular la diferencia entre ángulos consecutivos
angle_diff = np.diff(angle_range)

print("Diferencias entre ángulos: ", angle_diff)

# Calcular la media de las diferencias
angle_diff_half = angle_diff / 2

print("Media de las diferencias: ", angle_diff_half)