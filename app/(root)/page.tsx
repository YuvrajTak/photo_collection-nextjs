import { Collection } from "@/components/shared/Collection"
import { navLinks } from "@/constants"
import { getAllImages } from "@/lib/actions/image.actions"
import Image from "next/image"
import Link from "next/link"

const Home = async () => {
  const page =  1;
  const searchQuery =  '';

  //const images = await getAllImages({ page, searchQuery})

  return (
    <>
   <div>Home</div>

      {/* <section className="sm:mt-12">
        <Collection 
          hasSearch={true}
          images={images?.data}
          totalPages={images?.totalPage}
          page={page}
        />
      </section> */}
    </>
  )
}

export default Home