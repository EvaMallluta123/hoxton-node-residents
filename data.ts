type House={
    id :number,
    address:string,
    type: string 
}

type Resident={
id:number,
name:string,
age: number,
gender: string,
houseId:number

}

export const houseData: House[]=[
{
    id :1,
    address:"Sheshi Willson",
    type:"house"
},
{
    id :2,
    address:"Bulevardi Ri",
    type:"flat"
},
{
    id :3,
    address:"Stacioni trenit",
    type:"farm"
}
]

export const residentsData:Resident[]=[
{
id:1,
name:"Ann",
age: 24,
gender: "F",
houseId:2
},
{
id:2,
name:"John",
age: 22,
gender: "M",
houseId:2
},
{
id:3,
name:"Ben",
age: 30,
gender: "M",
houseId:1
},
{
id:4,
name:"Beatrix",
age: 19,
gender: "F",
houseId:1
},
{
id:5,
name:"Eva",
age: 22,
gender: "F",
houseId:3
},
{
id:6,
name:"Diana",
age: 24,
gender: "F",
houseId:3
},
{
id:7,
name:"Ajet",
age: 25,
gender: "M",
houseId:3
}


]