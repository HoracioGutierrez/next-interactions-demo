import { DemoType } from "@/models/demos"
import { getDemos } from "@/utils/actions"

export default async function DemosWithSuspense() {

    await new Promise(resolve => setTimeout(resolve, 3000))
    const { payload } = await getDemos()

    return (
        <>
            {payload.demos.map((demo: DemoType, i: number) => {
                return (
                    <article key={i} className="demo">
                        <h3>{demo.name}</h3>
                        <p>{demo.payload}</p>
                    </article>
                )
            })}
        </>
    )
}