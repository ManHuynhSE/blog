import { Fragment, useContext, useState } from "react";
import {
    Dialog,
    DialogBody,
    Input,
} from "@material-tailwind/react";
import myContext from "../../context/data/myContext.jsx";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchDialog() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    const context = useContext(myContext);
    const { mode } = context;
    return (
        <Fragment>
            {/* Search Icon  */}
            <div onClick={handleOpen} style={{ cursor: 'pointer' }}>
                <AiOutlineSearch size={20} color="white" />
            </div>
            {/* Dialog  */}
            <Dialog className=" relative right-[1em] w-[25em]  md:right-0 md:w-0 lg:right-0 lg:w-0" open={open} handler={handleOpen} style={{ background: mode === 'light' ? '#2f3542' : '#2f3542', color: mode === 'dark' ? 'white' : 'black' }}>
                {/* Dialog Body  */}
                <DialogBody >
                    <div className="flex w-full   justify-center">
                        {/* Input  */}
                        <Input
                            color="white"
                            type="search"
                            label="Type here..."
                            className=" bg-[#2C3A47]"
                            name="searchkey"
                            containerProps={{
                                className: "min-w-[288px]",
                            }}
                        />
                    </div>



                    {/* Heading  */}
                    <div className=" text-center">
                        <h1 className=" text-gray-600">SOMETHING THAT NOT IMPORTANT!!AND DOESNOT WORK YET</h1>
                    </div>
                </DialogBody>
            </Dialog>
        </Fragment >
    );
}