"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
	DialogFooter,
} from "@/components/ui/dialog"
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/components/ui/use-toast"
import { defaultTheme } from "@/theme"

const { primary300, primary400, primary600, textColor, backgroundColor } = defaultTheme

export default function ShadCNUI() {
	const [openDialog, setOpenDialog] = useState(false)
	const { toast } = useToast()

	return (
		<div className="flex flex-col items-center justify-center gap-5 mt-5">
			<Dialog open={openDialog} onOpenChange={setOpenDialog}>
				<DialogTrigger asChild>
					<Button
						style={{
							backgroundColor: primary400,
							color: textColor,
						}}
						onMouseDown={(e) => (e.currentTarget.style.backgroundColor = primary300)}
						onMouseUp={(e) => (e.currentTarget.style.backgroundColor = primary400)}
						onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = primary600)}
						onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = primary400)}
					>
						Open Dialog
					</Button>
				</DialogTrigger>
				<DialogContent
					style={{
						backgroundColor: backgroundColor,
						borderRadius: "8px",
						boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
					}}
				>
					<DialogHeader>
						<DialogTitle>Dialog Title</DialogTitle>
						<DialogDescription>Dialog content goes here...</DialogDescription>
					</DialogHeader>
					<DialogFooter>
						<Button
							style={{
								backgroundColor: primary400,
								color: textColor,
							}}
							onMouseDown={(e) => (e.currentTarget.style.backgroundColor = primary300)}
							onMouseUp={(e) => (e.currentTarget.style.backgroundColor = primary400)}
							onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = primary600)}
							onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = primary400)}
							onClick={() => setOpenDialog(false)}
						>
							Close
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
			<Input
				type="text"
				placeholder="ShadCN UI TextField"
				className="max-w-sm"
				style={{
					borderColor: primary400,
				}}
			/>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						style={{
							backgroundColor: primary400,
							color: textColor,
						}}
						onMouseDown={(e) => (e.currentTarget.style.backgroundColor = primary300)}
						onMouseUp={(e) => (e.currentTarget.style.backgroundColor = primary400)}
						onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = primary600)}
						onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = primary400)}
					>
						ShadCN UI Menu (Open)
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent
					style={{
						backgroundColor: backgroundColor,
					}}
				>
					<DropdownMenuItem onSelect={() => alert("Profile selected")}>Profile</DropdownMenuItem>
					<DropdownMenuItem onSelect={() => alert("My account selected")}>
						My account
					</DropdownMenuItem>
					<DropdownMenuItem onSelect={() => alert("Logout selected")}>Logout</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
			<Button
				style={{
					backgroundColor: primary400,
					color: textColor,
				}}
				onMouseDown={(e) => (e.currentTarget.style.backgroundColor = primary300)}
				onMouseUp={(e) => (e.currentTarget.style.backgroundColor = primary400)}
				onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = primary600)}
				onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = primary400)}
				onClick={() => {
					toast({
						title: "Snackbar title",
						description: "This is a Snackbar",
					})
				}}
			>
				ShadCN UI Snackbar (Open)
			</Button>

			<Select>
				<SelectTrigger
					className="max-w-sm"
					style={{
						backgroundColor: backgroundColor,
						borderColor: primary400,
					}}
				>
					Select an option
				</SelectTrigger>
				<SelectContent
					style={{
						backgroundColor: backgroundColor,
					}}
				>
					<SelectItem value="Profile">Profile</SelectItem>
					<SelectItem value="My account">My account</SelectItem>
					<SelectItem value="Logout">Logout</SelectItem>
				</SelectContent>
			</Select>
			<Tabs defaultValue="tab1" className="w-full max-w-md">
				<TabsList className="w-full">
					<TabsTrigger value="tab1" className="flex-1">
						Tab 1
					</TabsTrigger>
					<TabsTrigger value="tab2" className="flex-1">
						Tab 2
					</TabsTrigger>
					<TabsTrigger value="tab3" className="flex-1">
						Tab 3
					</TabsTrigger>
				</TabsList>
				<TabsContent value="tab1">Content for Tab 1</TabsContent>
				<TabsContent value="tab2">Content for Tab 2</TabsContent>
				<TabsContent value="tab3">Content for Tab 3</TabsContent>
			</Tabs>

			<Toaster />
		</div>
	)
}
