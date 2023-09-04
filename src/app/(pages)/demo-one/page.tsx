import Page from "@/components/layout/Page";
import { DemoType } from "@/models/demos";

const getDemos = async () => {
    try {
        const response = await fetch(process.env.BASE_URL + '/api/demos')
        const { payload } = await response.json()
        return { payload, error: null }
    } catch (error) {
        return { payload: null, error }
    }
}


export default async function DemoOne() {

    await new Promise(resolve => setTimeout(resolve, 3000))
    const { payload } = await getDemos()

    return (
        <Page title="Demo One">
            <section>
                <p>En este otro demo intento demostrar lo mismo que en la landing pero accediendo a informacion que no tenemos hardcodeada, es decir proveniente de una base de datos o una api.</p>
            </section>
            <section>
                <h2>Lista de Demos</h2>
                <div className="demo-container">
                    {payload.demos.map((demo: DemoType, i: number) => {
                        return (
                            <article key={i} className="demo">
                                <h3>{demo.name}</h3>
                                <p>{demo.payload}</p>
                            </article>
                        )
                    })}
                </div>
            </section>
        </Page>
    )
}
