"use client"
import {useState} from 'react';

const Template = ({ // if you change route input value not changing
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {

  const [iptVal , setIptVal] = useState<string>("")
  
  return (
    <div className='csc'>this is ({children}) children 
    <input type="text" className='bg-gray-700 ml-3' value={iptVal} onChange={e => setIptVal(e.target.value)} />
    </div>
  );
};

export default Template;