import React from 'react'

const RecentPost = (props) => {
  return (
    <section>
  <div className="container">
    <div className="flex gap-2">
      <img src={props.image} alt="" />
      <div>
        <p className="font-josef text-[14px] text-[#3F509E]">
          It is a long established fact
        </p>
        <p className="font-lato font-semibold text-[#8A8FB9] text[11px]">
          Aug 09 2020
        </p>
      </div>
    </div>
  </div>
</section>
  )
}

export default RecentPost
