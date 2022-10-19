import { Box, Button, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectCategories } from "./categorySlice";
import DeleteIcon from "@mui/icons-material/Delete"
import { DataGrid, GridColDef, GridRenderCellParams, GridRowsProp, renderActionsCell } from '@mui/x-data-grid';


export const CategoryList = () =>{
    const categories = useAppSelector(selectCategories);

    const rows: GridRowsProp = categories.map((category)=>({
        id:category.id,
        name:category.name,
        description: category.description,
        is_active:category.is_active,
        created_at:new Date(category.created_at).toLocaleDateString("pt-BR")
    }));

      const columns: GridColDef[] = [
        { field: 'name', headerName: 'Name', flex:1 },
        { field: 'description', headerName: 'Description', flex:1},
        {
            field:'is_active', 
            headerName:"Active", 
            flex:1, 
            type:"boolean", 
            renderCell:renderIsActiveCell,
        },
        {
            field:'created_at', 
            headerName:"Create At", 
            flex:1            
        },
        {
            field:'id', 
            headerName:"Actions", 
            flex:1,
            renderCell:renderActionsCell,          
        },
      ];

      function renderActionsCell(params: GridRenderCellParams){
        return(
           <IconButton
            color="secondary"
            onClick={()=> console.log("Clicado")}
            aria-label="Delete"
           >
            <DeleteIcon/>
           </IconButton>
        )
      }
      
      function renderIsActiveCell(rowData: GridRenderCellParams) {
        return(
            <Typography color={rowData.value ? "primary": "secondary"}>
                {rowData.value ? "Active" :"Inactive"}
            </Typography>
        )
        
      }
      
    return(
    <Box maxWidth="lg" sx={{ mt:4, mb:4 }}> 
    <Box display="flex" justifyContent="flex-end">
        <Button 
        variant="contained" 
        color="secondary" 
        component={Link} 
        to="/categories/create" 
        style={{ marginBottom:"1rem"  }}>New Category</Button>
    </Box>
      
       {/*
        {categories.map((category)=>(
                    <Typography key={category.id}>{category.name}</Typography>
                ))}
        */} 
        <div style={{ height: 300, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} />
        </div>
    </Box>
    )
}
    
  
  