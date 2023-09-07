import React from 'react'

export const Header = () => {
    return (
        <div
            style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#003B95', width: '100%', height: '150px' }}>
            <div style={{ width: '77%' }}>
                <div style={{ display: 'flex', flexDirection: 'row', height: '50%' }}>
                    <div style={{ display: 'flex', marginLeft: '20px', alignItems: 'center', justifyContent: 'flex-start', width: '12%' }}>
                        <div style={{ marginLeft: '20px', color: 'white', fontSize: '30px', fontWeight: 'bold' }}>Product.com</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', width: '88%' }}>
                        <div style={{ display: "flex", flexDirection: "row", height: "35px" }}>
                            <form style={{ display: "flex", width: "700px" }}>
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm "
                                    style={{
                                        marginRight: "10px",
                                        width: "100%",
                                        fontSize: "20px",
                                        marginLeft: "20px",
                                    }}
                                />
                            </form>
                        </div>
                        <div style={{ marginLeft: '20px', color: 'white', fontSize: '15px', fontWeight: 'bold' }}>VND</div>
                        <div style={{ marginLeft: '20px', color: 'white', fontSize: '15px', fontWeight: 'bold' }}>
                            <img style={{ width: '50px', height: '100%' }} src='https://st.quantrimang.com/photos/image/2021/09/05/Co-Vietnam.png'></img>
                        </div>
                        <div style={{ marginLeft: '20px', color: 'white', fontSize: '15px', fontWeight: 'bold' }}>?</div>
                        <div style={{ marginLeft: '20px', color: 'white', fontSize: '15px', fontWeight: 'bold' }}>Đăng chỗ nghỉ của Quý vị</div>
                        <button type="submit" style={{ height: '30px', margin: '10px', color: '#003B95', fontWeight: 'bold' }}>Đăng ký</button>
                        <button type="submit" style={{ height: '30px', marginRight: '50px', color: '#003B95', fontWeight: 'bold' }}>Đăng nhập</button>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', height: '50%' }}>
                    <div style={{ display: 'flex', marginLeft: '20px', alignItems: 'center', justifyContent: 'flex-start', width: '12%' }}>
                    <div style={{ marginLeft: '50px', color: 'white', fontSize: '15px', fontWeight: 'bold' }}>
                            <img style={{ width: '100px', height: '100%' }} src='https://hoangluxury.com.vn/images/ckeditor/images/Vertu-logo.jpg'></img>
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', width: '88%' ,marginLeft:'200px'}}>
                        <div style={{ marginLeft: '20px', color: 'white', fontSize: '20px', fontWeight: 'bold' }}>ERP FEATURES</div>
                        <div style={{ marginLeft: '20px', color: 'white', fontSize: '20px', fontWeight: 'bold' }}>SERVICE</div>
                        <div style={{ marginLeft: '20px', color: 'white', fontSize: '20px', fontWeight: 'bold' }}>PRODUCT</div>
                        <div style={{ marginLeft: '20px', color: 'white', fontSize: '20px', fontWeight: 'bold' }}>ABOUT ECOUNT ERP</div>
                        <div style={{ marginLeft: '20px', color: 'white', fontSize: '20px', fontWeight: 'bold' }}>Introduce</div>
                    </div>
                </div>

            </div>
        </div>
    )
}
