Algoritmo sin_titulo
	Escribir 'Ingrese la cantidad de alumnos'
	Leer cAlumnos
	Si cAlumnos>=100 Entonces
		costo <- cAlumnos*650
	SiNo
		Si cAlumnos<100 Y cAlumnos>49 Entonces
			costo <- cAlumnos*700
		SiNo
			Si cAlumnos<50 Y cAlumnos>29 Entonces
				costo <- cAlumnos*950
			SiNo
				Si cAlumnos<30 Entonces
					costo <- 4000
				FinSi
			FinSi
		FinSi
	FinSi
	Escribir costo
FinAlgoritmo
