const router =require('express').Router()
const db = require('./dbConfig')
db.schema.createTable('account',(table)=>{
    table.increments('Id')
    table.string('name')
    table.integer('budget')

})
.then(()=>console.log('created table'))
.catch(()=>console.log('error'))
console.log(db('account').as())

router.post('/',(req,res)=>{
    const data = req.body
    if(data.name && data.budget){
        db('account')
        .insert(data)
        .then(()=>res.status(200).json({message:'success'}))
        .catch(()=>res.status(500).json({error:'Error could not be added to the data base'}))
    }
    else{
        res.status(400).json({message:'Please insert name and budget'})
    }
})

router.get('/:id',(req,res)=>{
    const id = req.params.id
 if(req.params.id){
     db('account')
         .then(item => res.status(200).json(item))
         .catch(() => res.statuts(400).json({ message: 'error couldd not find user with that id' }))
 }else{
     db('account')
         .then(item => res.status(200).json(item))
         .catch(() => res.statuts(400).json({ message: 'error couldd not find user with that id' }))
 }
})

router.put('/:id',(req,res)=>{
    const data = req.body
    const id = req.params.id
    db('account')
    .where({name:id})
    .update(data)
    .then(item=>res.status(200).json(item))
    .catch(()=>res.status(400).json({error:'Could not update the user'}))
})

router.delete('/:id',(req,res)=>{
    const id = req.params.id
    db('account')
    .where({name:id})
    .then(item=>res.status(200).json(item))
    .catch(()=>res.status(400).json({error:'Could find item to delete'}))
})
module.exports= router