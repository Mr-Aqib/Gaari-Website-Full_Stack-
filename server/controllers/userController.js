const registerUser = (req, res) =>
{
    const { name, email, age } = req.body
    if (!name || !email || !age)
    {
        throw new Error ("Enter fields")
        
    }
    else {
        
    }
    res.json({ name,email, age })
                
}
module.exports = registerUser