//import { actionOne } from "@/app/utils/actions";
import Button from "./Button";

export default function ServerForm() {
    return (
        <form /* action={actionOne} */ className="flex gap-4 ">
            <input type="text" name="demo-one" placeholder="Random Text..." className="w-full p-1 rounded-md"/>
            <Button>enviar</Button>
        </form>
    )
}