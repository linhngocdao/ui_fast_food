// import React from 'react';
import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import { Table  } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    name:string;
    price: number
}


const Tes = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
          axios
            .get('http://localhost:8888/api/product/getList?page=1&limit=1&name=')
            .then((res) => res.data),
      })
      
      if (isLoading) return 'Loading...'
    
      if (error) return 'An error has occurred: ' + error.message
    const columns: ColumnsType<DataType> = [
        {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Product Price',
            dataIndex: 'price',
            key: 'price',
        },
    ];
    // const data: DataType[] = props.products.map((item: IProduct) => {
    //     return {
    //         key: item.id,
    //         ...item
    //     }
    // })

    return (

 <Table columns={columns} dataSource={data.data} />
         
    );
}

export default Tes;
