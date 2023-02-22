import React, { useState } from 'react'
import Pagination from './Pagination';


const PostCard = () => {
    const [posts,] = useState([
        {
            "id": 1,
            "imageUrl": "https://hub.dummyapis.com/Image?text=SS&height=120&width=120",
            "firstName": "Stuart",
            "lastName": "Schinner",
            "email": "Stuart.Schinner@dummyapis.com",
            "contactNumber": "4009496213",
            "age": 51,
            "dob": "17/07/1972",
            "salary": 1.0,
            "address": "Address1"
        },
        {
            "id": 2,
            "imageUrl": "https://hub.dummyapis.com/Image?text=VH&height=120&width=120",
            "firstName": "Vivianne",
            "lastName": "Hahn",
            "email": "Vivianne.Hahn@dummyapis.com",
            "contactNumber": "4847494054",
            "age": 70,
            "dob": "14/06/1953",
            "salary": 2.0,
            "address": "Address2"
        },
        {
            "id": 3,
            "imageUrl": "https://hub.dummyapis.com/Image?text=AG&height=120&width=120",
            "firstName": "Alvina",
            "lastName": "Gutmann",
            "email": "Alvina.Gutmann@dummyapis.com",
            "contactNumber": "4930295249",
            "age": 77,
            "dob": "18/06/1946",
            "salary": 3.0,
            "address": "Address3"
        },
        {
            "id": 4,
            "imageUrl": "https://hub.dummyapis.com/Image?text=AR&height=120&width=120",
            "firstName": "Amelie",
            "lastName": "Ratke",
            "email": "Amelie.Ratke@dummyapis.com",
            "contactNumber": "4545490416",
            "age": 65,
            "dob": "02/07/1958",
            "salary": 4.0,
            "address": "Address4"
        },
        {
            "id": 5,
            "imageUrl": "https://hub.dummyapis.com/Image?text=MS&height=120&width=120",
            "firstName": "Marcella",
            "lastName": "Schiller",
            "email": "Marcella.Schiller@dummyapis.com",
            "contactNumber": "4390896097",
            "age": 76,
            "dob": "31/01/1947",
            "salary": 5.0,
            "address": "Address5"
        },
        {
            "id": 6,
            "imageUrl": "https://hub.dummyapis.com/Image?text=VB&height=120&width=120",
            "firstName": "Velma",
            "lastName": "Bruen",
            "email": "Velma.Bruen@dummyapis.com",
            "contactNumber": "4437295862",
            "age": 90,
            "dob": "08/06/1933",
            "salary": 6.0,
            "address": "Address6"
        },
        {
            "id": 7,
            "imageUrl": "https://hub.dummyapis.com/Image?text=FH&height=120&width=120",
            "firstName": "Frank",
            "lastName": "Howell",
            "email": "Frank.Howell@dummyapis.com",
            "contactNumber": "4637593169",
            "age": 63,
            "dob": "06/11/1960",
            "salary": 7.0,
            "address": "Address7"
        },
        {
            "id": 8,
            "imageUrl": "https://hub.dummyapis.com/Image?text=AC&height=120&width=120",
            "firstName": "Aliya",
            "lastName": "Collier",
            "email": "Aliya.Collier@dummyapis.com",
            "contactNumber": "4663891234",
            "age": 70,
            "dob": "05/11/1953",
            "salary": 8.0,
            "address": "Address8"
        },
        {
            "id": 9,
            "imageUrl": "https://hub.dummyapis.com/Image?text=CP&height=120&width=120",
            "firstName": "Camila",
            "lastName": "Parker",
            "email": "Camila.Parker@dummyapis.com",
            "contactNumber": "4965094324",
            "age": 29,
            "dob": "25/07/1994",
            "salary": 9.0,
            "address": "Address9"
        },
        {
            "id": 10,
            "imageUrl": "https://hub.dummyapis.com/Image?text=JH&height=120&width=120",
            "firstName": "Jena",
            "lastName": "Hartmann",
            "email": "Jena.Hartmann@dummyapis.com",
            "contactNumber": "4903692236",
            "age": 44,
            "dob": "12/07/1979",
            "salary": 10.0,
            "address": "Address10"
        },
        {
            "id": 11,
            "imageUrl": "https://hub.dummyapis.com/Image?text=RF&height=120&width=120",
            "firstName": "Rubie",
            "lastName": "Feeney",
            "email": "Rubie.Feeney@dummyapis.com",
            "contactNumber": "4601599008",
            "age": 39,
            "dob": "14/12/1984",
            "salary": 11.0,
            "address": "Address11"
        },
        {
            "id": 12,
            "imageUrl": "https://hub.dummyapis.com/Image?text=DY&height=120&width=120",
            "firstName": "Dariana",
            "lastName": "Yost",
            "email": "Dariana.Yost@dummyapis.com",
            "contactNumber": "4347393626",
            "age": 84,
            "dob": "07/10/1939",
            "salary": 12.0,
            "address": "Address12"
        },
        {
            "id": 13,
            "imageUrl": "https://hub.dummyapis.com/Image?text=MR&height=120&width=120",
            "firstName": "Madilyn",
            "lastName": "Ritchie",
            "email": "Madilyn.Ritchie@dummyapis.com",
            "contactNumber": "4458592219",
            "age": 81,
            "dob": "22/05/1942",
            "salary": 13.0,
            "address": "Address13"
        },
        {
            "id": 14,
            "imageUrl": "https://hub.dummyapis.com/Image?text=OJ&height=120&width=120",
            "firstName": "Oscar",
            "lastName": "Jakubowski",
            "email": "Oscar.Jakubowski@dummyapis.com",
            "contactNumber": "4489390590",
            "age": 66,
            "dob": "09/04/1957",
            "salary": 14.0,
            "address": "Address14"
        },
        {
            "id": 15,
            "imageUrl": "https://hub.dummyapis.com/Image?text=JS&height=120&width=120",
            "firstName": "Joan",
            "lastName": "Simonis",
            "email": "Joan.Simonis@dummyapis.com",
            "contactNumber": "4365896120",
            "age": 38,
            "dob": "02/12/1985",
            "salary": 15.0,
            "address": "Address15"
        },
        {
            "id": 16,
            "imageUrl": "https://hub.dummyapis.com/Image?text=MH&height=120&width=120",
            "firstName": "Martine",
            "lastName": "Hamill",
            "email": "Martine.Hamill@dummyapis.com",
            "contactNumber": "4420395967",
            "age": 76,
            "dob": "02/01/1947",
            "salary": 16.0,
            "address": "Address16"
        },
        {
            "id": 17,
            "imageUrl": "https://hub.dummyapis.com/Image?text=HZ&height=120&width=120",
            "firstName": "Herman",
            "lastName": "Zulauf",
            "email": "Herman.Zulauf@dummyapis.com",
            "contactNumber": "4789094131",
            "age": 90,
            "dob": "18/03/1933",
            "salary": 17.0,
            "address": "Address17"
        },
        {
            "id": 18,
            "imageUrl": "https://hub.dummyapis.com/Image?text=JF&height=120&width=120",
            "firstName": "Josefa",
            "lastName": "Fritsch",
            "email": "Josefa.Fritsch@dummyapis.com",
            "contactNumber": "4170291685",
            "age": 23,
            "dob": "14/06/2000",
            "salary": 18.0,
            "address": "Address18"
        },
        {
            "id": 19,
            "imageUrl": "https://hub.dummyapis.com/Image?text=FB&height=120&width=120",
            "firstName": "Fay",
            "lastName": "Becker",
            "email": "Fay.Becker@dummyapis.com",
            "contactNumber": "4499397228",
            "age": 89,
            "dob": "27/03/1934",
            "salary": 19.0,
            "address": "Address19"
        },
        {
            "id": 20,
            "imageUrl": "https://hub.dummyapis.com/Image?text=BH&height=120&width=120",
            "firstName": "Blanche",
            "lastName": "Heidenreich",
            "email": "Blanche.Heidenreich@dummyapis.com",
            "contactNumber": "4829390249",
            "age": 40,
            "dob": "22/02/1983",
            "salary": 20.0,
            "address": "Address20"
        },
        {
            "id": 21,
            "imageUrl": "https://hub.dummyapis.com/Image?text=AD&height=120&width=120",
            "firstName": "Adella",
            "lastName": "Deckow",
            "email": "Adella.Deckow@dummyapis.com",
            "contactNumber": "4587296000",
            "age": 49,
            "dob": "15/12/1974",
            "salary": 21.0,
            "address": "Address21"
        },
        {
            "id": 22,
            "imageUrl": "https://hub.dummyapis.com/Image?text=WK&height=120&width=120",
            "firstName": "Weldon",
            "lastName": "Konopelski",
            "email": "Weldon.Konopelski@dummyapis.com",
            "contactNumber": "4525099040",
            "age": 61,
            "dob": "20/02/1962",
            "salary": 22.0,
            "address": "Address22"
        },
        {
            "id": 23,
            "imageUrl": "https://hub.dummyapis.com/Image?text=GS&height=120&width=120",
            "firstName": "Gardner",
            "lastName": "Schumm",
            "email": "Gardner.Schumm@dummyapis.com",
            "contactNumber": "4735392800",
            "age": 53,
            "dob": "25/11/1970",
            "salary": 23.0,
            "address": "Address23"
        },
        {
            "id": 24,
            "imageUrl": "https://hub.dummyapis.com/Image?text=GS&height=120&width=120",
            "firstName": "Gerald",
            "lastName": "Sipes",
            "email": "Gerald.Sipes@dummyapis.com",
            "contactNumber": "4989799062",
            "age": 57,
            "dob": "13/01/1966",
            "salary": 24.0,
            "address": "Address24"
        },
        {
            "id": 25,
            "imageUrl": "https://hub.dummyapis.com/Image?text=AP&height=120&width=120",
            "firstName": "Andy",
            "lastName": "Pagac",
            "email": "Andy.Pagac@dummyapis.com",
            "contactNumber": "4075196327",
            "age": 49,
            "dob": "27/10/1974",
            "salary": 25.0,
            "address": "Address25"
        },
        {
            "id": 26,
            "imageUrl": "https://hub.dummyapis.com/Image?text=JC&height=120&width=120",
            "firstName": "Jenna",
            "lastName": "Crist",
            "email": "Jenna.Crist@dummyapis.com",
            "contactNumber": "4158498281",
            "age": 44,
            "dob": "01/05/1979",
            "salary": 26.0,
            "address": "Address26"
        },
        {
            "id": 27,
            "imageUrl": "https://hub.dummyapis.com/Image?text=LG&height=120&width=120",
            "firstName": "Litzy",
            "lastName": "Glover",
            "email": "Litzy.Glover@dummyapis.com",
            "contactNumber": "4173799312",
            "age": 70,
            "dob": "07/11/1953",
            "salary": 27.0,
            "address": "Address27"
        },
        {
            "id": 28,
            "imageUrl": "https://hub.dummyapis.com/Image?text=CM&height=120&width=120",
            "firstName": "Claud",
            "lastName": "Mayert",
            "email": "Claud.Mayert@dummyapis.com",
            "contactNumber": "4481291084",
            "age": 71,
            "dob": "13/09/1952",
            "salary": 28.0,
            "address": "Address28"
        },
        {
            "id": 29,
            "imageUrl": "https://hub.dummyapis.com/Image?text=RR&height=120&width=120",
            "firstName": "Rachael",
            "lastName": "Ritchie",
            "email": "Rachael.Ritchie@dummyapis.com",
            "contactNumber": "4273994847",
            "age": 42,
            "dob": "09/05/1981",
            "salary": 29.0,
            "address": "Address29"
        },
        {
            "id": 30,
            "imageUrl": "https://hub.dummyapis.com/Image?text=JR&height=120&width=120",
            "firstName": "Jace",
            "lastName": "Roberts",
            "email": "Jace.Roberts@dummyapis.com",
            "contactNumber": "4946897082",
            "age": 57,
            "dob": "05/04/1966",
            "salary": 30.0,
            "address": "Address30"
        },
        {
            "id": 31,
            "imageUrl": "https://hub.dummyapis.com/Image?text=TL&height=120&width=120",
            "firstName": "Tanner",
            "lastName": "Little",
            "email": "Tanner.Little@dummyapis.com",
            "contactNumber": "4486496757",
            "age": 85,
            "dob": "22/01/1938",
            "salary": 31.0,
            "address": "Address31"
        },
        {
            "id": 32,
            "imageUrl": "https://hub.dummyapis.com/Image?text=KH&height=120&width=120",
            "firstName": "Kameron",
            "lastName": "Hettinger",
            "email": "Kameron.Hettinger@dummyapis.com",
            "contactNumber": "4797092243",
            "age": 32,
            "dob": "02/06/1991",
            "salary": 32.0,
            "address": "Address32"
        },
        {
            "id": 33,
            "imageUrl": "https://hub.dummyapis.com/Image?text=MC&height=120&width=120",
            "firstName": "Madaline",
            "lastName": "Casper",
            "email": "Madaline.Casper@dummyapis.com",
            "contactNumber": "4146694952",
            "age": 61,
            "dob": "15/04/1962",
            "salary": 33.0,
            "address": "Address33"
        },
        {
            "id": 34,
            "imageUrl": "https://hub.dummyapis.com/Image?text=WB&height=120&width=120",
            "firstName": "Walter",
            "lastName": "Brown",
            "email": "Walter.Brown@dummyapis.com",
            "contactNumber": "4623992421",
            "age": 34,
            "dob": "18/01/1989",
            "salary": 34.0,
            "address": "Address34"
        },
        {
            "id": 35,
            "imageUrl": "https://hub.dummyapis.com/Image?text=AS&height=120&width=120",
            "firstName": "Alvera",
            "lastName": "Senger",
            "email": "Alvera.Senger@dummyapis.com",
            "contactNumber": "4603098787",
            "age": 83,
            "dob": "03/11/1940",
            "salary": 35.0,
            "address": "Address35"
        },
        {
            "id": 36,
            "imageUrl": "https://hub.dummyapis.com/Image?text=MT&height=120&width=120",
            "firstName": "Maria",
            "lastName": "Thompson",
            "email": "Maria.Thompson@dummyapis.com",
            "contactNumber": "4636290014",
            "age": 62,
            "dob": "30/11/1961",
            "salary": 36.0,
            "address": "Address36"
        },
        {
            "id": 37,
            "imageUrl": "https://hub.dummyapis.com/Image?text=VL&height=120&width=120",
            "firstName": "Vincent",
            "lastName": "Lesch",
            "email": "Vincent.Lesch@dummyapis.com",
            "contactNumber": "4375794432",
            "age": 39,
            "dob": "06/07/1984",
            "salary": 37.0,
            "address": "Address37"
        },
        {
            "id": 38,
            "imageUrl": "https://hub.dummyapis.com/Image?text=GC&height=120&width=120",
            "firstName": "Grayce",
            "lastName": "Cruickshank",
            "email": "Grayce.Cruickshank@dummyapis.com",
            "contactNumber": "4627291784",
            "age": 34,
            "dob": "31/05/1989",
            "salary": 38.0,
            "address": "Address38"
        },
        {
            "id": 39,
            "imageUrl": "https://hub.dummyapis.com/Image?text=PB&height=120&width=120",
            "firstName": "Paula",
            "lastName": "Bergstrom",
            "email": "Paula.Bergstrom@dummyapis.com",
            "contactNumber": "4232095829",
            "age": 78,
            "dob": "06/10/1945",
            "salary": 39.0,
            "address": "Address39"
        },
        {
            "id": 40,
            "imageUrl": "https://hub.dummyapis.com/Image?text=FP&height=120&width=120",
            "firstName": "Fausto",
            "lastName": "Price",
            "email": "Fausto.Price@dummyapis.com",
            "contactNumber": "4983797329",
            "age": 82,
            "dob": "24/02/1941",
            "salary": 40.0,
            "address": "Address40"
        },
        {
            "id": 41,
            "imageUrl": "https://hub.dummyapis.com/Image?text=TM&height=120&width=120",
            "firstName": "Ted",
            "lastName": "Mills",
            "email": "Ted.Mills@dummyapis.com",
            "contactNumber": "4453595921",
            "age": 28,
            "dob": "20/06/1995",
            "salary": 41.0,
            "address": "Address41"
        },
        {
            "id": 42,
            "imageUrl": "https://hub.dummyapis.com/Image?text=RM&height=120&width=120",
            "firstName": "Roosevelt",
            "lastName": "Mann",
            "email": "Roosevelt.Mann@dummyapis.com",
            "contactNumber": "4422998577",
            "age": 59,
            "dob": "17/01/1964",
            "salary": 42.0,
            "address": "Address42"
        },
        {
            "id": 43,
            "imageUrl": "https://hub.dummyapis.com/Image?text=KO&height=120&width=120",
            "firstName": "Kamron",
            "lastName": "Ondricka",
            "email": "Kamron.Ondricka@dummyapis.com",
            "contactNumber": "4931890617",
            "age": 78,
            "dob": "30/07/1945",
            "salary": 43.0,
            "address": "Address43"
        },
        {
            "id": 44,
            "imageUrl": "https://hub.dummyapis.com/Image?text=VS&height=120&width=120",
            "firstName": "Vergie",
            "lastName": "Stokes",
            "email": "Vergie.Stokes@dummyapis.com",
            "contactNumber": "4894590145",
            "age": 45,
            "dob": "15/11/1978",
            "salary": 44.0,
            "address": "Address44"
        },
        {
            "id": 45,
            "imageUrl": "https://hub.dummyapis.com/Image?text=SB&height=120&width=120",
            "firstName": "Soledad",
            "lastName": "Braun",
            "email": "Soledad.Braun@dummyapis.com",
            "contactNumber": "4775991211",
            "age": 70,
            "dob": "30/01/1953",
            "salary": 45.0,
            "address": "Address45"
        },
        {
            "id": 46,
            "imageUrl": "https://hub.dummyapis.com/Image?text=AS&height=120&width=120",
            "firstName": "August",
            "lastName": "Steuber",
            "email": "August.Steuber@dummyapis.com",
            "contactNumber": "4989291008",
            "age": 40,
            "dob": "22/03/1983",
            "salary": 46.0,
            "address": "Address46"
        },
        {
            "id": 47,
            "imageUrl": "https://hub.dummyapis.com/Image?text=VB&height=120&width=120",
            "firstName": "Vesta",
            "lastName": "Balistreri",
            "email": "Vesta.Balistreri@dummyapis.com",
            "contactNumber": "4924197462",
            "age": 89,
            "dob": "24/07/1934",
            "salary": 47.0,
            "address": "Address47"
        },
        {
            "id": 48,
            "imageUrl": "https://hub.dummyapis.com/Image?text=LB&height=120&width=120",
            "firstName": "Laurence",
            "lastName": "Balistreri",
            "email": "Laurence.Balistreri@dummyapis.com",
            "contactNumber": "4714698947",
            "age": 90,
            "dob": "24/11/1933",
            "salary": 48.0,
            "address": "Address48"
        },
        {
            "id": 49,
            "imageUrl": "https://hub.dummyapis.com/Image?text=TP&height=120&width=120",
            "firstName": "Tristian",
            "lastName": "Prohaska",
            "email": "Tristian.Prohaska@dummyapis.com",
            "contactNumber": "4482997653",
            "age": 46,
            "dob": "21/10/1977",
            "salary": 49.0,
            "address": "Address49"
        },
        {
            "id": 50,
            "imageUrl": "https://hub.dummyapis.com/Image?text=MS&height=120&width=120",
            "firstName": "Morris",
            "lastName": "Schimmel",
            "email": "Morris.Schimmel@dummyapis.com",
            "contactNumber": "4759695797",
            "age": 24,
            "dob": "27/02/1999",
            "salary": 50.0,
            "address": "Address50"
        },
        {
            "id": 51,
            "imageUrl": "https://hub.dummyapis.com/Image?text=VB&height=120&width=120",
            "firstName": "Vera",
            "lastName": "Bogisich",
            "email": "Vera.Bogisich@dummyapis.com",
            "contactNumber": "4008799161",
            "age": 78,
            "dob": "23/03/1945",
            "salary": 51.0,
            "address": "Address51"
        },
        {
            "id": 52,
            "imageUrl": "https://hub.dummyapis.com/Image?text=CV&height=120&width=120",
            "firstName": "Cheyanne",
            "lastName": "Von",
            "email": "Cheyanne.Von@dummyapis.com",
            "contactNumber": "4225192949",
            "age": 84,
            "dob": "22/05/1939",
            "salary": 52.0,
            "address": "Address52"
        },
        {
            "id": 53,
            "imageUrl": "https://hub.dummyapis.com/Image?text=VP&height=120&width=120",
            "firstName": "Velva",
            "lastName": "Pollich",
            "email": "Velva.Pollich@dummyapis.com",
            "contactNumber": "4295094797",
            "age": 86,
            "dob": "19/11/1937",
            "salary": 53.0,
            "address": "Address53"
        },
        {
            "id": 54,
            "imageUrl": "https://hub.dummyapis.com/Image?text=CG&height=120&width=120",
            "firstName": "Coby",
            "lastName": "Goldner",
            "email": "Coby.Goldner@dummyapis.com",
            "contactNumber": "4732598306",
            "age": 67,
            "dob": "21/08/1956",
            "salary": 54.0,
            "address": "Address54"
        },
        {
            "id": 55,
            "imageUrl": "https://hub.dummyapis.com/Image?text=HS&height=120&width=120",
            "firstName": "Hassie",
            "lastName": "Sipes",
            "email": "Hassie.Sipes@dummyapis.com",
            "contactNumber": "4857497683",
            "age": 80,
            "dob": "19/07/1943",
            "salary": 55.0,
            "address": "Address55"
        },
        {
            "id": 56,
            "imageUrl": "https://hub.dummyapis.com/Image?text=SD&height=120&width=120",
            "firstName": "Sadye",
            "lastName": "Douglas",
            "email": "Sadye.Douglas@dummyapis.com",
            "contactNumber": "4476194525",
            "age": 39,
            "dob": "11/09/1984",
            "salary": 56.0,
            "address": "Address56"
        },
        {
            "id": 57,
            "imageUrl": "https://hub.dummyapis.com/Image?text=SM&height=120&width=120",
            "firstName": "Schuyler",
            "lastName": "Mayert",
            "email": "Schuyler.Mayert@dummyapis.com",
            "contactNumber": "4502599426",
            "age": 41,
            "dob": "28/07/1982",
            "salary": 57.0,
            "address": "Address57"
        },
        {
            "id": 58,
            "imageUrl": "https://hub.dummyapis.com/Image?text=JP&height=120&width=120",
            "firstName": "Jordon",
            "lastName": "Parker",
            "email": "Jordon.Parker@dummyapis.com",
            "contactNumber": "4325195972",
            "age": 38,
            "dob": "28/10/1985",
            "salary": 58.0,
            "address": "Address58"
        },
        {
            "id": 59,
            "imageUrl": "https://hub.dummyapis.com/Image?text=AL&height=120&width=120",
            "firstName": "Angie",
            "lastName": "Lind",
            "email": "Angie.Lind@dummyapis.com",
            "contactNumber": "4417499392",
            "age": 54,
            "dob": "24/11/1969",
            "salary": 59.0,
            "address": "Address59"
        },
        {
            "id": 60,
            "imageUrl": "https://hub.dummyapis.com/Image?text=EJ&height=120&width=120",
            "firstName": "Evie",
            "lastName": "Jacobson",
            "email": "Evie.Jacobson@dummyapis.com",
            "contactNumber": "4292490848",
            "age": 42,
            "dob": "23/09/1981",
            "salary": 60.0,
            "address": "Address60"
        },
        {
            "id": 61,
            "imageUrl": "https://hub.dummyapis.com/Image?text=MS&height=120&width=120",
            "firstName": "Melinda",
            "lastName": "Schowalter",
            "email": "Melinda.Schowalter@dummyapis.com",
            "contactNumber": "4600696093",
            "age": 82,
            "dob": "16/04/1941",
            "salary": 61.0,
            "address": "Address61"
        },
        {
            "id": 62,
            "imageUrl": "https://hub.dummyapis.com/Image?text=CE&height=120&width=120",
            "firstName": "Cydney",
            "lastName": "Emard",
            "email": "Cydney.Emard@dummyapis.com",
            "contactNumber": "4466194819",
            "age": 49,
            "dob": "20/08/1974",
            "salary": 62.0,
            "address": "Address62"
        },
        {
            "id": 63,
            "imageUrl": "https://hub.dummyapis.com/Image?text=DN&height=120&width=120",
            "firstName": "Demarcus",
            "lastName": "Nolan",
            "email": "Demarcus.Nolan@dummyapis.com",
            "contactNumber": "4889395354",
            "age": 62,
            "dob": "13/06/1961",
            "salary": 63.0,
            "address": "Address63"
        },
        {
            "id": 64,
            "imageUrl": "https://hub.dummyapis.com/Image?text=EJ&height=120&width=120",
            "firstName": "Eva",
            "lastName": "Jenkins",
            "email": "Eva.Jenkins@dummyapis.com",
            "contactNumber": "4077296294",
            "age": 49,
            "dob": "12/08/1974",
            "salary": 64.0,
            "address": "Address64"
        },
        {
            "id": 65,
            "imageUrl": "https://hub.dummyapis.com/Image?text=GF&height=120&width=120",
            "firstName": "Grover",
            "lastName": "Feeney",
            "email": "Grover.Feeney@dummyapis.com",
            "contactNumber": "4728497323",
            "age": 22,
            "dob": "26/09/2001",
            "salary": 65.0,
            "address": "Address65"
        },
        {
            "id": 66,
            "imageUrl": "https://hub.dummyapis.com/Image?text=FP&height=120&width=120",
            "firstName": "Flavio",
            "lastName": "Price",
            "email": "Flavio.Price@dummyapis.com",
            "contactNumber": "4695494665",
            "age": 73,
            "dob": "28/06/1950",
            "salary": 66.0,
            "address": "Address66"
        },
        {
            "id": 67,
            "imageUrl": "https://hub.dummyapis.com/Image?text=LR&height=120&width=120",
            "firstName": "Lela",
            "lastName": "Ruecker",
            "email": "Lela.Ruecker@dummyapis.com",
            "contactNumber": "4823294040",
            "age": 41,
            "dob": "31/03/1982",
            "salary": 67.0,
            "address": "Address67"
        },
        {
            "id": 68,
            "imageUrl": "https://hub.dummyapis.com/Image?text=XL&height=120&width=120",
            "firstName": "Xavier",
            "lastName": "Leannon",
            "email": "Xavier.Leannon@dummyapis.com",
            "contactNumber": "4724295373",
            "age": 53,
            "dob": "13/05/1970",
            "salary": 68.0,
            "address": "Address68"
        },
        {
            "id": 69,
            "imageUrl": "https://hub.dummyapis.com/Image?text=JH&height=120&width=120",
            "firstName": "Jaiden",
            "lastName": "Hintz",
            "email": "Jaiden.Hintz@dummyapis.com",
            "contactNumber": "4366991280",
            "age": 45,
            "dob": "23/03/1978",
            "salary": 69.0,
            "address": "Address69"
        },
        {
            "id": 70,
            "imageUrl": "https://hub.dummyapis.com/Image?text=DH&height=120&width=120",
            "firstName": "Delta",
            "lastName": "Halvorson",
            "email": "Delta.Halvorson@dummyapis.com",
            "contactNumber": "4562794520",
            "age": 36,
            "dob": "26/03/1987",
            "salary": 70.0,
            "address": "Address70"
        },
        {
            "id": 71,
            "imageUrl": "https://hub.dummyapis.com/Image?text=EC&height=120&width=120",
            "firstName": "Eddie",
            "lastName": "Collier",
            "email": "Eddie.Collier@dummyapis.com",
            "contactNumber": "4329090639",
            "age": 73,
            "dob": "04/11/1950",
            "salary": 71.0,
            "address": "Address71"
        },
        {
            "id": 72,
            "imageUrl": "https://hub.dummyapis.com/Image?text=BC&height=120&width=120",
            "firstName": "Brooklyn",
            "lastName": "Connelly",
            "email": "Brooklyn.Connelly@dummyapis.com",
            "contactNumber": "4157090075",
            "age": 79,
            "dob": "08/03/1944",
            "salary": 72.0,
            "address": "Address72"
        },
        {
            "id": 73,
            "imageUrl": "https://hub.dummyapis.com/Image?text=AM&height=120&width=120",
            "firstName": "Alivia",
            "lastName": "Mann",
            "email": "Alivia.Mann@dummyapis.com",
            "contactNumber": "4644895366",
            "age": 33,
            "dob": "12/08/1990",
            "salary": 73.0,
            "address": "Address73"
        },
        {
            "id": 74,
            "imageUrl": "https://hub.dummyapis.com/Image?text=LG&height=120&width=120",
            "firstName": "Levi",
            "lastName": "Gerhold",
            "email": "Levi.Gerhold@dummyapis.com",
            "contactNumber": "4598199813",
            "age": 48,
            "dob": "19/02/1975",
            "salary": 74.0,
            "address": "Address74"
        },
        {
            "id": 75,
            "imageUrl": "https://hub.dummyapis.com/Image?text=CL&height=120&width=120",
            "firstName": "Cade",
            "lastName": "Lubowitz",
            "email": "Cade.Lubowitz@dummyapis.com",
            "contactNumber": "4421191174",
            "age": 42,
            "dob": "18/08/1981",
            "salary": 75.0,
            "address": "Address75"
        },
        {
            "id": 76,
            "imageUrl": "https://hub.dummyapis.com/Image?text=BG&height=120&width=120",
            "firstName": "Bernardo",
            "lastName": "Gutkowski",
            "email": "Bernardo.Gutkowski@dummyapis.com",
            "contactNumber": "4477395436",
            "age": 23,
            "dob": "27/03/2000",
            "salary": 76.0,
            "address": "Address76"
        },
        {
            "id": 77,
            "imageUrl": "https://hub.dummyapis.com/Image?text=QD&height=120&width=120",
            "firstName": "Quinten",
            "lastName": "Dickinson",
            "email": "Quinten.Dickinson@dummyapis.com",
            "contactNumber": "4472996747",
            "age": 65,
            "dob": "19/06/1958",
            "salary": 77.0,
            "address": "Address77"
        },
        {
            "id": 78,
            "imageUrl": "https://hub.dummyapis.com/Image?text=KB&height=120&width=120",
            "firstName": "Kara",
            "lastName": "Bartoletti",
            "email": "Kara.Bartoletti@dummyapis.com",
            "contactNumber": "4979093992",
            "age": 34,
            "dob": "21/04/1989",
            "salary": 78.0,
            "address": "Address78"
        },
        {
            "id": 79,
            "imageUrl": "https://hub.dummyapis.com/Image?text=NK&height=120&width=120",
            "firstName": "Neal",
            "lastName": "Kuhlman",
            "email": "Neal.Kuhlman@dummyapis.com",
            "contactNumber": "4449997431",
            "age": 69,
            "dob": "19/11/1954",
            "salary": 79.0,
            "address": "Address79"
        },
        {
            "id": 80,
            "imageUrl": "https://hub.dummyapis.com/Image?text=RR&height=120&width=120",
            "firstName": "Rosalyn",
            "lastName": "Ritchie",
            "email": "Rosalyn.Ritchie@dummyapis.com",
            "contactNumber": "4405497595",
            "age": 25,
            "dob": "02/04/1998",
            "salary": 80.0,
            "address": "Address80"
        },
        {
            "id": 81,
            "imageUrl": "https://hub.dummyapis.com/Image?text=DS&height=120&width=120",
            "firstName": "Delia",
            "lastName": "Schaefer",
            "email": "Delia.Schaefer@dummyapis.com",
            "contactNumber": "4402591031",
            "age": 71,
            "dob": "07/06/1952",
            "salary": 81.0,
            "address": "Address81"
        },
        {
            "id": 82,
            "imageUrl": "https://hub.dummyapis.com/Image?text=MK&height=120&width=120",
            "firstName": "Melanie",
            "lastName": "King",
            "email": "Melanie.King@dummyapis.com",
            "contactNumber": "4102191250",
            "age": 72,
            "dob": "12/12/1951",
            "salary": 82.0,
            "address": "Address82"
        },
        {
            "id": 83,
            "imageUrl": "https://hub.dummyapis.com/Image?text=SS&height=120&width=120",
            "firstName": "Sherri",
            "lastName": "Stokes",
            "email": "Sherri.Stokes@dummyapis.com",
            "contactNumber": "4072890095",
            "age": 87,
            "dob": "10/09/1936",
            "salary": 83.0,
            "address": "Address83"
        },
        {
            "id": 84,
            "imageUrl": "https://hub.dummyapis.com/Image?text=BH&height=120&width=120",
            "firstName": "Bruce",
            "lastName": "Hettinger",
            "email": "Bruce.Hettinger@dummyapis.com",
            "contactNumber": "4629290985",
            "age": 54,
            "dob": "30/03/1969",
            "salary": 84.0,
            "address": "Address84"
        },
        {
            "id": 85,
            "imageUrl": "https://hub.dummyapis.com/Image?text=LW&height=120&width=120",
            "firstName": "Laura",
            "lastName": "Walter",
            "email": "Laura.Walter@dummyapis.com",
            "contactNumber": "4218497876",
            "age": 29,
            "dob": "23/12/1994",
            "salary": 85.0,
            "address": "Address85"
        },
        {
            "id": 86,
            "imageUrl": "https://hub.dummyapis.com/Image?text=CB&height=120&width=120",
            "firstName": "Caterina",
            "lastName": "Bechtelar",
            "email": "Caterina.Bechtelar@dummyapis.com",
            "contactNumber": "4230292893",
            "age": 44,
            "dob": "12/02/1979",
            "salary": 86.0,
            "address": "Address86"
        },
        {
            "id": 87,
            "imageUrl": "https://hub.dummyapis.com/Image?text=JS&height=120&width=120",
            "firstName": "Janet",
            "lastName": "Schumm",
            "email": "Janet.Schumm@dummyapis.com",
            "contactNumber": "4376598402",
            "age": 37,
            "dob": "04/09/1986",
            "salary": 87.0,
            "address": "Address87"
        },
        {
            "id": 88,
            "imageUrl": "https://hub.dummyapis.com/Image?text=JD&height=120&width=120",
            "firstName": "Jonathon",
            "lastName": "Daniel",
            "email": "Jonathon.Daniel@dummyapis.com",
            "contactNumber": "4755695366",
            "age": 85,
            "dob": "16/10/1938",
            "salary": 88.0,
            "address": "Address88"
        },
        {
            "id": 89,
            "imageUrl": "https://hub.dummyapis.com/Image?text=AK&height=120&width=120",
            "firstName": "Arvel",
            "lastName": "Kunze",
            "email": "Arvel.Kunze@dummyapis.com",
            "contactNumber": "4452394585",
            "age": 45,
            "dob": "24/08/1978",
            "salary": 89.0,
            "address": "Address89"
        },
        {
            "id": 90,
            "imageUrl": "https://hub.dummyapis.com/Image?text=WT&height=120&width=120",
            "firstName": "Webster",
            "lastName": "Trantow",
            "email": "Webster.Trantow@dummyapis.com",
            "contactNumber": "4836993526",
            "age": 65,
            "dob": "15/04/1958",
            "salary": 90.0,
            "address": "Address90"
        },
        {
            "id": 91,
            "imageUrl": "https://hub.dummyapis.com/Image?text=DW&height=120&width=120",
            "firstName": "Delphia",
            "lastName": "Weimann",
            "email": "Delphia.Weimann@dummyapis.com",
            "contactNumber": "4937190957",
            "age": 42,
            "dob": "26/06/1981",
            "salary": 91.0,
            "address": "Address91"
        },
        {
            "id": 92,
            "imageUrl": "https://hub.dummyapis.com/Image?text=HH&height=120&width=120",
            "firstName": "Harvey",
            "lastName": "Huels",
            "email": "Harvey.Huels@dummyapis.com",
            "contactNumber": "4208296110",
            "age": 23,
            "dob": "31/10/2000",
            "salary": 92.0,
            "address": "Address92"
        },
        {
            "id": 93,
            "imageUrl": "https://hub.dummyapis.com/Image?text=HB&height=120&width=120",
            "firstName": "Hugh",
            "lastName": "Batz",
            "email": "Hugh.Batz@dummyapis.com",
            "contactNumber": "4255091518",
            "age": 71,
            "dob": "29/08/1952",
            "salary": 93.0,
            "address": "Address93"
        },
        {
            "id": 94,
            "imageUrl": "https://hub.dummyapis.com/Image?text=AK&height=120&width=120",
            "firstName": "Anna",
            "lastName": "Kuvalis",
            "email": "Anna.Kuvalis@dummyapis.com",
            "contactNumber": "4993591484",
            "age": 57,
            "dob": "07/03/1966",
            "salary": 94.0,
            "address": "Address94"
        },
        {
            "id": 95,
            "imageUrl": "https://hub.dummyapis.com/Image?text=IJ&height=120&width=120",
            "firstName": "Ike",
            "lastName": "Jast",
            "email": "Ike.Jast@dummyapis.com",
            "contactNumber": "4424893249",
            "age": 21,
            "dob": "02/01/2002",
            "salary": 95.0,
            "address": "Address95"
        },
        {
            "id": 96,
            "imageUrl": "https://hub.dummyapis.com/Image?text=MJ&height=120&width=120",
            "firstName": "Marge",
            "lastName": "Jacobi",
            "email": "Marge.Jacobi@dummyapis.com",
            "contactNumber": "4087396237",
            "age": 70,
            "dob": "23/12/1953",
            "salary": 96.0,
            "address": "Address96"
        },
        {
            "id": 97,
            "imageUrl": "https://hub.dummyapis.com/Image?text=EO&height=120&width=120",
            "firstName": "Elyse",
            "lastName": "O'Kon",
            "email": "Elyse.O'Kon@dummyapis.com",
            "contactNumber": "4722598030",
            "age": 88,
            "dob": "28/09/1935",
            "salary": 97.0,
            "address": "Address97"
        },
        {
            "id": 98,
            "imageUrl": "https://hub.dummyapis.com/Image?text=SR&height=120&width=120",
            "firstName": "Sadie",
            "lastName": "Runolfsson",
            "email": "Sadie.Runolfsson@dummyapis.com",
            "contactNumber": "4049592259",
            "age": 50,
            "dob": "09/02/1973",
            "salary": 98.0,
            "address": "Address98"
        },
        {
            "id": 99,
            "imageUrl": "https://hub.dummyapis.com/Image?text=MC&height=120&width=120",
            "firstName": "Maurine",
            "lastName": "Cassin",
            "email": "Maurine.Cassin@dummyapis.com",
            "contactNumber": "4961790319",
            "age": 44,
            "dob": "12/04/1979",
            "salary": 99.0,
            "address": "Address99"
        },
        {
            "id": 100,
            "imageUrl": "https://hub.dummyapis.com/Image?text=EK&height=120&width=120",
            "firstName": "Eli",
            "lastName": "Koch",
            "email": "Eli.Koch@dummyapis.com",
            "contactNumber": "4934696352",
            "age": 88,
            "dob": "26/09/1935",
            "salary": 100.0,
            "address": "Address100"
        }
    ]);
    const [showPerPage,] = useState(10);
    const [pagination, setPagination] = useState({
        start: 0,
        end: showPerPage,
    });

    const onPaginationChange = (start, end) => {
        setPagination({ start: start, end: end });
    };
    return (
        <div className="container py-4">
            <div className="row">
                {posts.slice(pagination.start, pagination.end).map((post) => (
                    <div className='col-md-3 mb-3' key={post.id} >
                        <div className='card'>
                            <div className='mb-3'>
                                <p1> ID -&nbsp;#{post.id}</p1><br />
                                <p1> FirstName - &nbsp;{post.firstName}</p1><br />
                                <p1>LastName - &nbsp;{post.lastName}</p1><br />
                                <p1>DOB - &nbsp;{post.dob}</p1><br />
                                <p1>Age - &nbsp;{post.age}</p1><br />
                                <p1>Email - &nbsp;{post.email}</p1><br />
                                <p1>ContactNo. - &nbsp;{post.contactNumber}</p1><br />
                            </div>
                        </div>


                    </div>

                ))}
            </div>

            <Pagination
                showPerPage={showPerPage}
                onPaginationChange={onPaginationChange}
                total={posts.length}
            />


        </div>
    )
}

export default PostCard
