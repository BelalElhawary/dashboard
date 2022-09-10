import React from 'react'
import { ExcelExport, GridComponent, ColumnsDirective, ColumnDirective, Toolbar, Search, Edit, PdfExport, Inject } from '@syncfusion/ej2-react-grids';

import { Header } from '../components';
import { adminsGrid } from '../data/DataLists';
import { Token } from '../data/DataLoader';
import { DataManager, UrlAdaptor } from '@syncfusion/ej2-data';
import { useRef } from 'react';
import { API } from '../data/env';

const Admins = () => {
  const grid = useRef(null);
  const data = new DataManager({
    adaptor: new UrlAdaptor(),
    insertUrl: API + 'admins/insert',
    removeUrl: API + 'admins/remove',
    updateUrl: API + 'admins/update',
    url: API + 'admins',
    headers: [{
      'Authorization': `Bearer ${Token}`
     }],
    offline: false,
  })

  const toolbarOnClick = (args) =>{
    console.log(args.item.id);
    if(grid.current && args.item.id == 'grid_1336744963_3_pdfexport')
    {
      grid.current.pdfExport();
    }else if(grid.current && args.item.id == 'grid_1336744963_3_excelexport')
    {
      grid.current.excelExport();
    }
  }

  return (
    <div>
      <div className='mt-16 m-2 md:m-10 p-5 md:p-10 bg-white rounded-3xl'>
        <Header category='Page' title='Admins' />
        <GridComponent ref={grid} dataSource={data} allowExcelExport={true} allowPdfExport={true} editSettings={{ allowDeleting: true, allowEditing: true, allowAdding: true }} toolbar={['Search', 'PdfExport', 'ExcelExport', 'Edit', 'Delete', 'Add', 'Update']} toolbarClick={toolbarOnClick} width='auto' height='55vh'>
          <ColumnsDirective>
            {adminsGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Search, Edit, Toolbar, PdfExport, ExcelExport]} />
        </GridComponent>
      </div>
    </div>
  )
}

export default Admins