import "./styles.scss"
import SideBard from "@/components/SideBard"
import { redirect } from "next/navigation"
import { nextAuthOptions } from "../api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"

export default async function PagesLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode
}) {
	const session = await getServerSession(nextAuthOptions)

	if (!(session as any)?.usuario) {
		redirect("/")
	}

	return (
		<section className="container-layout">
			<div className="sidebar-layout">
				<SideBard />
			</div>

			<div className="content-layout">
				<div className="box-menu-layout ">
					<div className="box-search-layout">
						<div className="search-layout">
							<input
								type="text"
								placeholder="Pesquise aqui"
								className="ipt-search-layout"
							/>
						</div>
					</div>
				</div>

				<main className="main-layout ">{children}</main>
			</div>
		</section>
	)
}
