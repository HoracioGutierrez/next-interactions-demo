import Button from "./Button";

export default async function ServerForm() {

    const handleSubmit = async (data: FormData) => {
        "use server"
        console.log(data)
    }

    return (
        <form action={handleSubmit} className="flex gap-4 ">
            <input type="text" name="demo-one" placeholder="Texto para el demo..." className="w-full p-1 rounded-md" />
            <Button>enviar</Button>
        </form>
    )
}