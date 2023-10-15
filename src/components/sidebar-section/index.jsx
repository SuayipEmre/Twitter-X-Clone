import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";

export const SidebarSection = ({ title, children, more }) => {
    return (
        <section className='bg-[#16181c] overflow-hidden mb-4 rounded-2xl border-[#16181c] '>
            <h5 className='py-3 px-4  text-xl font-extrabold text-[#e7e9ea] leading-6 flex items-center'>{title}</h5>

            <div className="grid">
                {children}
            </div>

            {
                more && (
                    <Link to={more} className='h-[52px] transition-colors hover:bg-white/[0.03] flex items-center px-4 text-[15px] text-[#1d9bf0]'>
                        Daha Fazla Göster
                    </Link>
                )
            }

        </section>
    )
}

SidebarSection.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    more: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
}

SidebarSection.defaultProps = {
    more: false
}