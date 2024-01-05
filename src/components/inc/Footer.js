
import React from "react";
import logo from "../images/logo.jpg"; // Đường dẫn đến file hình ảnh của bạn

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <div style={infoContainerStyle}>
                <div>
                    <img src={logo} alt="Company Logo" style={logoStyle} />
                </div>
                <div>
                    <p>
                        &copy; 2024 E-Project. Address: 8a Ngô Thất Thuyết, Hà
                        Nội, Việt Nam
                    </p>
                    <p>Số điện thoại: (000) 999-6666 or (000) 666-9999</p>
                    <a href="#">
                        <p>Email: fptaptech@fpt.edu.vn</p>
                    </a>
                    <p>Địa chỉ: 123 Ha Noi, City, Country</p>
                </div>
                <div className="map">
                    <iframe
                        title="Google Maps"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3724.1127483277796!2d105.770377!3d21.0281742!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab00954decbf%3A0xdb4ee23b49ad50c8!2zRlBUIEFwdGVjaCBIw6AgTuG7mWkgLSBI4buHIHRo4buRbmcgxJHDoG8gdOG6oW8gbOG6rXAgdHLDrG5oIHZpw6puIHF14buRYyB04bq_!5e0!3m2!1svi!2s!4v1704475879765!5m2!1svi!2s"
                        width="400"
                        height="150"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </footer>
    );
};

const footerStyle = {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
    bottom: "0",
    width: "100%",
};

const infoContainerStyle = {
    display: "flex",
    justifyContent: "space-around", // Căn đều ở cả hai bên
    alignItems: "center",
};

const logoStyle = {
    width: "200px",
    height: "110px",
    marginRight: "10px",
};

export default Footer;
