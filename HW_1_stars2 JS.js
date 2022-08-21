//HW_1* 
//Задания с разным количеством звездочек:
//1*: Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
//2*: Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.
 const age_2 = 18
 //28. Создать переменную “age_3” и присвоить ей значение 60
 const age_3 = 60
 //29. Создать if в котором будите проверять значение переменной age_1
 //30. Если age_1 < age_2, вывести в консоль “You don’t have access cause your age is ” + age_1 + “ It’s less then ”
 //31. Если age_1 >=  age_2 и age_1 <  age_3, вывести в консоль “Welcome  !”
 //32. Если age_1  > age_3, вывести в консоль “Keep calm and look Culture channel”.
 //33. Иначе выводите “Technical work”.
 const  checkAge = function(age) {
 if (typeof age == 'number') {
                    if (age < age_2) {  
                    console.log("You don’t have access cause your age is " + age + " It’s less then " + age_2)
                    } else if (age >=  age_2 && age <  age_3) {
                    console.log("Welcome  !")
                    } else if (age > age_3){
                    console.log("Keep calm and look Culture channel")
                    } else {
                    console.log("Technical work")
                    } 
               } else console.log ("Not an integer value")
}  
 //Вывести в консоль результат работы функции с возрастами 17, 18, 61
checkAge(17)
checkAge(18)
checkAge(60)
checkAge(61)
checkAge('aaa')
checkAge('20')