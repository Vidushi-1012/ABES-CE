// const express=require('express');
// //can also use import express from express
// const app=express();
// const port=8000;
// app.get('/',(req,res)=>{
//    res.send(`
//         <h1>ABES ENGINEERING COLLEGE</h1>
//         <img src="https://res.cloudinary.com/jerrick/image/upload/v1742189464/67d7b397fcdfa2001d383e85.jpg" style: width="100px"/>
//     `)
// })

// // app.get('/about',(req,res)=>{
// //     res.send("<h1>This is my about us page</h1>")
// // })

// // app.get('/img', (req,res)=>{
// //     res.send('<img src="https://res.cloudinary.com/jerrick/image/upload/v1742189464/67d7b397fcdfa2001d383e85.jpg"></img>')
// // })

// app.listen(port,()=>{
//     console.log(`server is running at http://localhost:${port}`)
// })

const express=require('express');
const app=express();
const port=8000;

app.use(express.json());

//database(json) store
const students=[
    {
        id:1,
        name:"Vidushi",
        class: "Btech"
    },
    {
        id:2,
        name:"priyanka",
        class:"mtech"
    }
]

//data read(all data)
app.get('/read', (req,res)=>{
    try{
        res.status(200).json({message: "show all the data", data: students});
    }
    catch(err){
        res.status(500).json({message:"data not found", error: err.message});
    }
})

//data show(for selective id only and not all)
app.get('/about/:id', (req,res)=>{
    try{
        const id=req.params.id;
        const student=students.find(s=>s.id==id);
        if(!student){
            return res.status(404).json({message: "Data not found", data: student});
        }
        res.status(200).json({message:"Data found", data: students});
    }
    catch(err){
        res.status(500).json({message:"data not found", error: err.message});
    }
})

//creating data
app.post('/add',(req,res)=>{
    try{
        const newStud={
            id:students.length+1,
            //... is used to destructure
            ...req.body
        }
        students.push(newStud)
        res.status(200).json({message: "Data successfully created!", data: newStud})
    }
    catch(err){
        res.status(500).json({message: " Data not found ", error: err.message})
    }
})

app.put('/edit/:id',(req,res)=>{
    try{
        const id = req.params.id;
        const index = students.find(s=>s.id==id);

        if (index==-1){
            return res.status(404).json({message: "Student data not found."});
        }
        students[index]={
            ...students[index],
            ...req.body
        }
        return res.status(200).json({message: "Data updated!", data:students})
    } catch(err) {
        res.status(500).json({message:"Error."});
    }
});

//data deletion
app.delete('/delete/:id',(req,res)=>{
    try{
        const id=req.params.id;
        const index=students.find(s=>s.id==id);
        if (index==-1){
            return res.status(404).json({message: "Student data not found."});
        }
        students.splice(index,1);
        res.status(200).json({message: "Data deleted successfully!"})
    }
    catch(err) {
        res.status(500).json({message:"Error."});
    }
})

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})