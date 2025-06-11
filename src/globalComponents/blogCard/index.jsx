

const BlogCard = ({image}) => {
  return (
    <>
        <div className=''>
            <div className="max-h-[406px] rounded-[25px] overflow-hidden">
                <img
                    src={image} 
                    alt="blog-image" 
                    className="w-full h-full object-cover"
                 />
            </div>
        </div>
    </>
  )
}

export default BlogCard