import React, { useRef } from 'react'
import { GridComponent, ColumnsDirective, Toolbar, ColumnDirective, Resize, Sort, Search, ContextMenu, Filter, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { Header } from '../components';
import { lessonsGrid } from '../data/DataLists';
import { } from '@mui/material'
import { Token } from '../data/DataLoader';
import { API } from '../data/env';

const Lessons = () => {

    const data = new DataManager({
        adaptor: new UrlAdaptor(),
        insertUrl: API + 'lessons/insert',
        removeUrl: API + 'lessons/remove',
        updateUrl: API + 'lessons/update',
        url: API + 'lessons',
        headers: [{
            'Authorization': `Bearer ${Token}`
        }]
    })


    const grid = useRef(null);

    const toolbarOnClick = (args) => {
        if (grid.current && args.item.id === 'gridcomp_pdfexport') {
            grid.current.pdfExport();
        } else if (grid.current && args.item.id === 'gridcomp_excelexport') {
            grid.current.excelExport();
        }
    }

    return (
        <div>
            <div className='mt-16 m-2 md:m-10 p-5 md:p-10 bg-white rounded-3xl'>
                <Header category='Page' title='Lessons' />
                <GridComponent id='gridcomp' ref={grid} dataSource={data} allowSorting={true} allowExcelExport={true} allowPdfExport={true} editSettings={{ allowDeleting: true, allowEditing: true, allowAdding: true }} toolbar={['Search', 'PdfExport', 'ExcelExport', 'Edit', 'Delete', 'Add', 'Update']} toolbarClick={toolbarOnClick} width='auto' height='55vh'>
                    <ColumnsDirective>
                        {lessonsGrid.map((item, index) => (
                            <ColumnDirective key={index} {...item} />
                        ))}
                    </ColumnsDirective>
                    <Inject services={[Resize, Sort, Toolbar, ContextMenu, Filter, ExcelExport, Search, PdfExport, Edit]} />
                </GridComponent>
            </div>
        </div>
    )
}

export default Lessons