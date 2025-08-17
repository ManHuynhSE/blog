import React from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function MyEditor() {
    return (
        <Editor
            apiKey="vfpsjurkeah2mvq6aiew1rxxy933ojd98pbraipmdguziqm8"
            init={{
                height: 500,
                menubar: true,
                plugins: "image code",
                toolbar: "undo redo | image code",
                automatic_uploads: true,
                images_upload_handler: (blobInfo) => {
                    return new Promise((resolve, reject) => {
                        const formData = new FormData();
                        formData.append("file", blobInfo.blob());
                        formData.append("upload_preset", "manddok"); // Từ Cloudinary
                        formData.append("cloud_name", "dmghtw364");

                        fetch(`https://api.cloudinary.com/v1_1/dmghtw364/image/upload`, {
                            method: "POST",
                            body: formData,
                        })
                            .then((res) => res.json())
                            .then((data) => {
                                if (data.secure_url) {
                                    resolve(data.secure_url);
                                    console.log(data.secure_url); // Trả về link ảnh cho TinyMCE
                                } else {
                                    reject("Upload failed");
                                }
                            })
                            .catch((err) => reject(err));
                    });
                },
            }}
        />
    );
}
