let  userName = ["Manahil", "Ali", "Admin", "Usman"]

userName = []
if (userName.length === 0){
    console.log("your Array in Empty we need to find some users!")  
}else{
// Using ForEach Loop  on Array
userName.forEach(oneUser =>{
    if(oneUser === "Admin"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }else {
        console.log(`Hello ${oneUser}, thank you for logging in again.`)
    }
})
}