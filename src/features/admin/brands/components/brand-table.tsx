import {Button} from "@/components/ui/button"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"
import {Edit, Trash2} from "lucide-react"

interface BrandTableProps {
    brands: any[]
    onEdit: (brand: any) => void
    onDelete: (id: string) => void
}

export function BrandTable({brands, onEdit, onDelete}: BrandTableProps) {
    return (
        <div className="border rounded-md">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Logo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {brands.map((brand) => (
                        <TableRow key={brand.id}>
                            <TableCell>
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className="h-10 w-10 object-contain"
                                />
                            </TableCell>
                            <TableCell className="font-medium">{brand.name}</TableCell>
                            <TableCell className="text-right">
                                <Button variant="ghost" size="icon" onClick={() => onEdit(brand)}>
                                    <Edit className="h-4 w-4"/>
                                </Button>
                                <Button 
                                    variant="ghost" 
                                    size="icon" 
                                    className="text-destructive"
                                    onClick={() => onDelete(brand.id)}
                                >
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
