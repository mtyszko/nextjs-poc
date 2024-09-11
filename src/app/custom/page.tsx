"use client"
import { KeyboardEvent, SetStateAction, useState } from "react"
import { defaultTheme } from "@/theme"

const { primary300, primary400, primary600, textColor, backgroundColor } = defaultTheme

export default function CustomUI() {
	const [openDialog, setOpenDialog] = useState(false)
	const [openToast, setOpenToast] = useState(false)
	const [activeTab, setActiveTab] = useState(1)

	const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, tabIndex: SetStateAction<number>) => {
		if (e.key === "ArrowRight") {
			setActiveTab((prevTab) => (prevTab === 3 ? 1 : prevTab + 1))
		} else if (e.key === "ArrowLeft") {
			setActiveTab((prevTab) => (prevTab === 1 ? 3 : prevTab - 1))
		} else if (e.key === "Enter" || e.key === "Space") {
			setActiveTab(tabIndex)
		}
	}

	return (
		<div className="flex flex-col items-center justify-center gap-5 mt-5">
			<button
				type="button"
				className="px-4 py-2 rounded focus:outline-none focus:ring-2"
				style={{
					backgroundColor: primary400,
					color: textColor,
				}}
				onMouseDown={(e) => (e.currentTarget.style.backgroundColor = primary300)}
				onMouseUp={(e) => (e.currentTarget.style.backgroundColor = primary400)}
				onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = primary600)}
				onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = primary400)}
				aria-label="Open dialog"
				onClick={() => setOpenDialog(true)}
			>
				Open Dialog
			</button>

			<div className="w-full max-w-sm">
				<label
					htmlFor="text-field"
					className="block text-sm font-medium"
					style={{ color: textColor }}
				>
					Text Field
				</label>
				<input
					type="text"
					id="text-field"
					name="text-field"
					className="mt-1 px-3 py-2 border rounded-md shadow-sm block w-full sm:text-sm focus:outline-none"
					style={{
						borderColor: primary400,
						backgroundColor: backgroundColor,
					}}
					aria-labelledby="text-field-label"
					placeholder="Enter text"
				/>
			</div>

			{openDialog && (
				<div
					id="dialog"
					role="dialog"
					aria-labelledby="dialog-title"
					aria-describedby="dialog-description"
					className="fixed inset-0 flex items-center justify-center"
					style={{
						backgroundColor: "rgba(0, 0, 0, 0.5)",
					}}
				>
					<div
						className="rounded-lg shadow-lg max-w-sm w-full p-6"
						style={{ backgroundColor: backgroundColor }}
					>
						<h2 id="dialog-title" className="text-lg font-medium" style={{ color: textColor }}>
							Dialog Title
						</h2>
						<p id="dialog-description" className="mt-2 text-sm" style={{ color: textColor }}>
							Dialog content goes here...
						</p>
						<div className="mt-4">
							<button
								type="button"
								className="px-4 py-2 rounded focus:outline-none focus:ring-2"
								style={{
									backgroundColor: primary400,
									color: textColor,
								}}
								onMouseDown={(e) => (e.currentTarget.style.backgroundColor = primary300)}
								onMouseUp={(e) => (e.currentTarget.style.backgroundColor = primary400)}
								onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = primary600)}
								onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = primary400)}
								aria-label="Close dialog"
								onClick={() => setOpenDialog(false)}
							>
								Close
							</button>
						</div>
					</div>
				</div>
			)}

			<div className="relative inline-block text-left">
				<button
					type="button"
					className="inline-flex justify-center w-full rounded-md shadow-sm px-4 py-2"
					style={{
						backgroundColor: backgroundColor,
						color: textColor,
						border: `1px solid ${primary400}`,
					}}
					id="menu-button"
					aria-expanded="false"
					aria-haspopup="true"
					onClick={() => {
						const menuButton = document.getElementById("menu-button")
						if (menuButton) {
							const menu = menuButton.nextElementSibling
							const expanded = menuButton.getAttribute("aria-expanded") === "true"
							menuButton.setAttribute("aria-expanded", !expanded + "")
							if (menu) {
								menu.classList.toggle("hidden")
							}
						}
					}}
				>
					Options
				</button>

				<div
					className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg hidden"
					style={{ backgroundColor: backgroundColor }}
					role="menu"
					aria-orientation="vertical"
					aria-labelledby="menu-button"
					tabIndex={-1}
				>
					<div className="py-1" role="none">
						<a
							href="#"
							className="block px-4 py-2 text-sm"
							style={{ color: textColor }}
							role="menuitem"
							tabIndex={-1}
							id="menu-item-0"
							onClick={() => alert("Profile selected")}
						>
							Profile
						</a>
						<a
							href="#"
							className="block px-4 py-2 text-sm"
							style={{ color: textColor }}
							role="menuitem"
							tabIndex={-1}
							id="menu-item-1"
							onClick={() => alert("My account selected")}
						>
							My account
						</a>
						<a
							href="#"
							className="block px-4 py-2 text-sm"
							style={{ color: textColor }}
							role="menuitem"
							tabIndex={-1}
							id="menu-item-2"
							onClick={() => alert("Logout selected")}
						>
							Logout
						</a>
					</div>
				</div>
			</div>

			<div
				id="toast"
				className={`fixed bottom-4 right-4 px-4 py-2 rounded ${openToast ? "block" : "hidden"}`}
				style={{
					backgroundColor: "#ffffff",
					color: textColor,
					border: `1px solid ${textColor}`,
					padding: "20px 40px",
				}}
				role="alert"
			>
				This is a snackbar
				<button
					className="ml-4 underline"
					style={{ color: textColor }}
					aria-label="Undo action"
					onClick={() => setOpenToast(false)}
				>
					Undo
				</button>
			</div>
			<button
				onClick={() => {
					setOpenToast(true)
					setTimeout(() => setOpenToast(false), 3000)
				}}
				style={{
					backgroundColor: primary400,
					color: textColor,
					padding: "10px 30px",
				}}
				onMouseDown={(e) => (e.currentTarget.style.backgroundColor = primary300)}
				onMouseUp={(e) => (e.currentTarget.style.backgroundColor = primary400)}
				onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = primary600)}
				onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = primary400)}
			>
				Open Snackbar
			</button>

			<div className="w-full max-w-sm">
				<label htmlFor="select" className="block text-sm font-medium" style={{ color: textColor }}>
					Choose an option
				</label>
				<select
					id="select"
					name="select"
					className="mt-1 block w-full pl-3 pr-10 py-2 text-base sm:text-sm rounded-md"
					style={{
						borderColor: primary400,
						backgroundColor: backgroundColor,
						color: textColor,
					}}
				>
					<option value="Profile">Profile</option>
					<option value="My account">My account</option>
					<option value="Logout">Logout</option>
				</select>
			</div>

			<div className="w-full max-w-md">
				<div className="border-b" style={{ borderColor: primary400 }}>
					<nav className="-mb-px flex" aria-label="Tabs">
						<button
							className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
								activeTab === 1 ? "border-primary400" : "border-transparent"
							}`}
							style={{
								color: textColor,
								borderColor: activeTab === 1 ? primary400 : "transparent",
							}}
							aria-selected={activeTab === 1}
							role="tab"
							onClick={() => setActiveTab(1)}
							onKeyDown={(e) => handleKeyDown(e, 1)}
							tabIndex={activeTab === 1 ? 0 : -1}
						>
							Tab 1
						</button>
						<button
							className={`ml-2 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
								activeTab === 2 ? "border-primary400" : "border-transparent"
							}`}
							style={{
								color: textColor,
								borderColor: activeTab === 2 ? primary400 : "transparent",
							}}
							aria-selected={activeTab === 2}
							role="tab"
							onClick={() => setActiveTab(2)}
							onKeyDown={(e) => handleKeyDown(e, 2)}
							tabIndex={activeTab === 2 ? 0 : -1}
						>
							Tab 2
						</button>
						<button
							className={`ml-2 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
								activeTab === 3 ? "border-primary400" : "border-transparent"
							}`}
							style={{
								color: textColor,
								borderColor: activeTab === 3 ? primary400 : "transparent",
							}}
							aria-selected={activeTab === 3}
							role="tab"
							onClick={() => setActiveTab(3)}
							onKeyDown={(e) => handleKeyDown(e, 3)}
							tabIndex={activeTab === 3 ? 0 : -1}
						>
							Tab 3
						</button>
					</nav>
				</div>
				<div className="pt-4">
					<div
						className={`tab-content ${activeTab === 1 ? "block" : "hidden"}`}
						role="tabpanel"
						style={{ color: textColor }}
					>
						Content for Tab 1
					</div>
					<div
						className={`tab-content ${activeTab === 2 ? "block" : "hidden"}`}
						role="tabpanel"
						style={{ color: textColor }}
					>
						Content for Tab 2
					</div>
					<div
						className={`tab-content ${activeTab === 3 ? "block" : "hidden"}`}
						role="tabpanel"
						style={{ color: textColor }}
					>
						Content for Tab 3
					</div>
				</div>
			</div>
		</div>
	)
}
