
import Box from '@mui/material/Box';
import { DataGridPro, GridToolbar } from '@mui/x-data-grid-pro';
import { useDemoData } from '@mui/x-data-grid-generator';
import { useCallback, useState } from 'react';

export default function Table() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100000,
    editable: true,
  });
  const [, setContent] = useState<string | null>(null)
  const eventListener = useCallback((event: any) => {
    console.log('evento:', event);
  }, []);
  return (
    <div >
      <Box sx={{ height: 485, width:'100%', pl:30 }}>
      <DataGridPro
        {...data}
        onCellClick={(e) => setContent(String(e.value))}
        onCellEditStart={(e) => setContent(String(e.value))}
        onCellDoubleClick={eventListener}
        onCellKeyDown={(e) => setContent(String(e.value))} 
        onResize={eventListener}
        onCellEditStop={eventListener}
        onClipboardCopy={eventListener}
        loading={data.rows.length === 0}
        rowHeight={38}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
    {/* <p>Content of the selected cell: {content || 'No cell selected!w'}</p> */}
    </div>
    
    
  );
}