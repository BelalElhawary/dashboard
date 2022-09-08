import React, { useState, useEffect, useRef } from 'react'
import { GridComponent, ColumnsDirective,Toolbar, ColumnDirective, Resize, Sort, Search, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { Button, Header } from '../components';
import { lessonsGrid } from '../data/DataLists';
import { } from '@mui/material'
import Dialog from '../components/Dialog';
import { lessons, LoadLessons } from '../data/DataLoader';
import { AddLesson } from '../data/DataRequest';

const Lessons = () => {
  const grid = useRef(null);

    const [lesson, setLesson] = useState(lessons);

    const toolbarOnClick = (args) =>{
        console.log(args.item.id);
        console.log(grid.current);
        if(grid.current && args.item.id === 'gridcomp_pdfexport')
        {
          grid.current.pdfExport();
        }
      }

    return (
        <div>
            <div className='mt-16 m-2 md:m-10 p-5 md:p-10 bg-white rounded-3xl'>
                <Header category='Page' title='Lessons' />
                <GridComponent id='gridcomp' ref={grid} dataSource={lesson} allowSorting={true} allowExcelExport={true} allowPdfExport={true} editSettings={{ allowDeleting: true, allowEditing: true, allowAdding: true }} toolbar={['Search', 'PdfExport', 'Edit', 'Delete', 'Add', 'Update']} toolbarClick={toolbarOnClick} width='auto' height='55vh'>
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