class authControllers{
    admin_login = async (req, res) => {
        const { email, password } = req.body;
        try {
            
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal server error" });
            
        }
        console.log(req.body);
    }
}

module.exports = new authControllers();