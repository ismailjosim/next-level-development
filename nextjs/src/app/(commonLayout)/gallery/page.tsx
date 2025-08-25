import Image from "next/image";
import img01 from '@/assets/img01.jpg'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Gallery Page',
    description: 'Show all Gallery Image',
}

const GalleryPage = () => {
    return (
        <div className="flex gap-5 items-center">
            <Image className="mx-auto" width={500} height={500} alt="next image" src={'https://images.pexels.com/photos/32768325/pexels-photo-32768325.png'} />
            <Image className="mx-auto" width={500} height={500} alt="next image" src={img01} />
        </div>
    );
};

export default GalleryPage;
