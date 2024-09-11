"use client"
import * as Dialog from "@radix-ui/react-dialog"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import * as Tabs from "@radix-ui/react-tabs"
import * as Toast from "@radix-ui/react-toast"
import * as Select from "@radix-ui/react-select"
import { useState } from "react"
import { Button, Theme } from "@radix-ui/themes"
import "@radix-ui/themes/styles.css"
import { defaultTheme } from "@/theme"

const { primary300, primary400, primary600, textColor } = defaultTheme

export default function RadixUI() {
	const [openDialog, setOpenDialog] = useState(false)
	const [openToast, setOpenToast] = useState(false)

	return (
		<Theme>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					gap: "20px",
					marginTop: "20px",
				}}
			>
				<Dialog.Root open={openDialog} onOpenChange={setOpenDialog}>
					<Dialog.Trigger asChild>
						<Button
							style={{
								backgroundColor: primary400,
								color: textColor,
								border: "none",
								padding: "8px 16px",
								borderRadius: "4px",
							}}
							onMouseDown={(e) => (e.currentTarget.style.backgroundColor = primary300)}
							onMouseUp={(e) => (e.currentTarget.style.backgroundColor = primary400)}
							onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = primary600)}
							onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = primary400)}
						>
							Open Dialog
						</Button>
					</Dialog.Trigger>
					<Dialog.Portal>
						<Dialog.Overlay
							style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", position: "fixed", inset: 0 }}
						/>
						<Dialog.Content
							style={{
								backgroundColor: "white",
								padding: "20px",
								borderRadius: "8px",
								maxWidth: "500px",
								position: "fixed",
								top: "50%",
								left: "50%",
								transform: "translate(-50%, -50%)",
								zIndex: 1000,
							}}
						>
							<Dialog.Title>Dialog Title</Dialog.Title>
							<Dialog.Description>Dialog content goes here...</Dialog.Description>
							<Button
								style={{
									backgroundColor: primary400,
									color: textColor,
									border: "none",
									padding: "8px 16px",
									borderRadius: "4px",
								}}
								onMouseDown={(e) => (e.currentTarget.style.backgroundColor = primary300)}
								onMouseUp={(e) => (e.currentTarget.style.backgroundColor = primary400)}
								onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = primary600)}
								onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = primary400)}
								onClick={() => setOpenDialog(false)}
							>
								Close
							</Button>
						</Dialog.Content>
					</Dialog.Portal>
				</Dialog.Root>

				<input
					type="text"
					placeholder="Radix UI TextField"
					style={{
						maxWidth: "300px",
						padding: "8px",
						borderRadius: "4px",
						border: `1px solid ${primary400}`,
					}}
				/>

				<DropdownMenu.Root>
					<DropdownMenu.Trigger asChild>
						<Button
							style={{
								backgroundColor: primary400,
								color: textColor,
								border: "none",
								padding: "8px 16px",
								borderRadius: "4px",
							}}
							onMouseDown={(e) => (e.currentTarget.style.backgroundColor = primary300)}
							onMouseUp={(e) => (e.currentTarget.style.backgroundColor = primary400)}
							onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = primary600)}
							onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = primary400)}
						>
							Radix UI Menu (Open)
						</Button>
					</DropdownMenu.Trigger>
					<DropdownMenu.Portal>
						<DropdownMenu.Content
							style={{
								backgroundColor: "white",
								padding: "10px",
								borderRadius: "8px",
								boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
							}}
						>
							<DropdownMenu.Item onSelect={() => alert("Profile selected")}>
								Profile
							</DropdownMenu.Item>
							<DropdownMenu.Item onSelect={() => alert("My account selected")}>
								My account
							</DropdownMenu.Item>
							<DropdownMenu.Item onSelect={() => alert("Logout selected")}>
								Logout
							</DropdownMenu.Item>
						</DropdownMenu.Content>
					</DropdownMenu.Portal>
				</DropdownMenu.Root>

				<Button
					style={{
						backgroundColor: primary400,
						color: textColor,
						border: "none",
						padding: "8px 16px",
						borderRadius: "4px",
					}}
					onMouseDown={(e) => (e.currentTarget.style.backgroundColor = primary300)}
					onMouseUp={(e) => (e.currentTarget.style.backgroundColor = primary400)}
					onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = primary600)}
					onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = primary400)}
					onClick={() => setOpenToast(true)}
				>
					Radix UI Snackbar (Open)
				</Button>
				<Toast.Provider>
					<Toast.Root open={openToast} onOpenChange={setOpenToast}>
						<Toast.Title>This is a Snackbar</Toast.Title>
						<Toast.Action altText="Undo">UNDO</Toast.Action>
					</Toast.Root>
					<Toast.Viewport style={{ position: "fixed", bottom: "20px", right: "20px" }} />
				</Toast.Provider>

				<Select.Root>
					<Select.Trigger
						aria-label="Food"
						style={{
							maxWidth: "300px",
							padding: "8px",
							borderRadius: "4px",
							border: `1px solid ${primary400}`,
							backgroundColor: "white",
						}}
					>
						<Select.Value placeholder="Select an option" />
					</Select.Trigger>
					<Select.Content
						position="popper"
						side="bottom"
						align="start"
						style={{
							backgroundColor: "white",
							borderRadius: "4px",
							boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
							marginTop: "8px",
							padding: "20px",
						}}
					>
						<Select.Viewport>
							<Select.Item value="Profile">Profile</Select.Item>
							<Select.Item value="My account">My account</Select.Item>
							<Select.Item value="Logout">Logout</Select.Item>
						</Select.Viewport>
					</Select.Content>
				</Select.Root>

				<Tabs.Root defaultValue="tab1">
					<Tabs.List
						aria-label="Manage your account"
						style={{ display: "flex", borderBottom: `1px solid ${primary400}` }}
					>
						<Tabs.Trigger
							value="tab1"
							style={{
								padding: "10px 20px",
								backgroundColor: "white",
								borderBottom: `2px solid ${primary400}`,
							}}
						>
							Tab 1
						</Tabs.Trigger>
						<Tabs.Trigger
							value="tab2"
							style={{
								padding: "10px 20px",
								backgroundColor: "white",
								borderBottom: `2px solid ${primary400}`,
							}}
						>
							Tab 2
						</Tabs.Trigger>
						<Tabs.Trigger
							value="tab3"
							style={{
								padding: "10px 20px",
								backgroundColor: "white",
								borderBottom: `2px solid ${primary400}`,
							}}
						>
							Tab 3
						</Tabs.Trigger>
					</Tabs.List>
					<Tabs.Content value="tab1" style={{ padding: "20px" }}>
						Content for Tab 1
					</Tabs.Content>
					<Tabs.Content value="tab2" style={{ padding: "20px" }}>
						Content for Tab 2
					</Tabs.Content>
					<Tabs.Content value="tab3" style={{ padding: "20px" }}>
						Content for Tab 3
					</Tabs.Content>
				</Tabs.Root>
			</div>
		</Theme>
	)
}
