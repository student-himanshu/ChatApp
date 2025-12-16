let express=require("express")
let cors=require("cors")
require("dotenv").config()
let {GoogleGenerativeAI}=require("@google/generative-ai")


let App= express()
App.use(cors())
App.use(express.json())
let genAI=new GoogleGenerativeAI(process.env.KEY)
let model=genAI.getGenerativeModel({model:"gemini-2.5-flash"})

App.post('/ask',
    async(req,res)=>{
        let {question} =req.body;
        let data=await model.generateContent(question)
        let finaldata=data.response.text()

        res.send({
            _status:true,
            _message:"COntent found...",
            finaldata
        })
    })


App.listen(process.env.PORT,()=>{
    console.log("severer start..")
})