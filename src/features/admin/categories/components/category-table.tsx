import {Button} from "@/components/ui/button"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"
import {Edit, Trash2} from "lucide-react"

interface CategoryTableProps {
    categories: any[]
}

export function CategoryTable({categories}: CategoryTableProps) {
    return (
        <div className="border rounded-md">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Image</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {categories.map((category) => (
                        <TableRow key={category.title}>
                            <TableCell>
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    className="h-10 w-10 object-cover rounded-md"
                                />
                            </TableCell>
                            <TableCell className="font-medium">{category.title}</TableCell>
                            <TableCell>{category.description}</TableCell>
                            <TableCell className="text-right">
                                <Button variant="ghost" size="icon">
                                    <Edit className="h-4 w-4"/>
                                </Button>
                                <Button variant="ghost" size="icon" className="text-destructive">
                                    <Trash2 className="h-4 w-4"/>
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
