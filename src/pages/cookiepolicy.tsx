import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const CookiePolicy: FC = () => {
    const navigate = useNavigate()
    return (
        <div className='bg-white p-6 pt-6 font-season h-full w-full overflow-y-auto'>
            <div className='overlay top-4 left-4 bg-white p-1 pl-0 rounded-md'>
                <button className='drop-shadow text-lg font-bold bg-zinc-200 hover:bg-zinc-300 rounded-md px-2 py-1 cursor-pointer m-x-auto' onClick={() => navigate(-1)}>&lt;- ย้อนกลับ</button>
            </div>
            <header className='text-center pt-4'>
                <img src="/images/logo.png" alt="logo" className='w-32 mx-auto mb-2' />
                <h1>Cookie Policy</h1>
                <h2 className='mt-2'>นโยบายเกี่ยวกับการใช้งาน Cookie ของเว็บไซต์ MakeItRainProject</h2>
            </header>
            <div className='text-left mt-4'>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;นโยบายการใช้คุกกี้นี้จะอธิบายถึงประเภท เหตุผล และลักษณะการใช้คุกกี้บนเว็บไซต์ของเว็บไซต์ MakeItRainProject  ซึ่งจะมีวิธีการจัดการคุกกี้ ดังนี้
                </p>
                <ul className='list-disc ml-8 mt-1'>
                    <li>
                        <p>ประเภทของคุกกี้</p>
                    </li>
                    <li>
                        <p>เราใช้คุกกี้อย่างไรบ้าง ?</p>
                    </li>
                    <li>
                        <p>การจัดการคุกกี้</p>
                    </li>
                    <li>
                        <p>การทบทวนและปรับปรุงนโยบายคุกกี้</p>
                    </li>
                </ul>
                <ul className='mt-4'>
                    <li>
                        <h3>คุกกี้ (Cookie) คืออะไร ?</h3>
                        <p>
                            คุกกี้ (Cookie) คือ ข้อมูลคอมพิวเตอร์ขนาดเล็ก (text file) ที่จะถูกติดตั้ง หรือบันทึกลงบนคอมพิวเตอร์หรืออุปกรณ์อิเล็กทรอนิกส์ของท่านเมื่อท่านเข้าชมเว็บไซต์ คุกกี้จะจดจำข้อมูลการใช้งานเว็บไซต์ของท่าน ทั้งนี้ เราจะเรียกเทคโนโลยีอื่นที่ทำหน้าที่คล้ายคลึงกันว่าคุกกี้ด้วย
                        </p>
                    </li>
                    <li>
                        <h3>เราใช้คุกกี้อย่างไรบ้าง ?</h3>
                        <p>
                            เราจะใช้คุกกี้เมื่อท่านได้เข้าเว็บไซต์ MakeItRainProject ของเรา โดยการใช้งานคุกกี้ของเราแบ่งออกตามลักษณะของการใช้งานได้ ดังนี้
                        </p>
                        <ul className='list-disc ml-8 mt-1'>
                            <li>
                                <p>
                                    <b>คุกกี้เพื่อการวิเคราะห์ (Analytic Cookies)</b><br />
                                    คุกกี้ประเภทนี้จะเก็บข้อมูลการใช้งานเว็บไซต์ของท่าน เพื่อให้เราสามารถพัฒนาเว็บไซต์ MakeItRainProject ของเราเพื่อให้เราสามารถทราบและวิเคราะห์ปริมาณการใช้งานเว็บไซต์ MakeItRainProject เพื่อการบริหารจัดการระบบ รวมทั้งการออกแบบและดำเนินการบริหารจัดการทรัพยากรสารสนเทศให้มีเสถียรภาพ และเพื่อเพิ่มประสบการณ์ที่ดีในการใช้เว็บไซต์ MakeItRainProject ของท่าน เช่น ระยะเวลาการเข้าใช้งาน การเลือกใช้งาน ทั้งนี้ หากท่านไม่ยินยอมให้เราใช้คุกกี้ประเภทนี้ เราจะไม่สามารถวัดผล ประเมิน และพัฒนาเว็บไซต์ MakeItRainProject ได้
                                </p>
                            </li>
                        </ul>
                        <table className='table-auto w-full mt-2 max-w-full table-fixed'>
                            <thead>
                                <tr className='text-center'>
                                    <th className='border border-black w-10'>คุกกี้</th>
                                    <th className='border border-black w-14'>ประเภท</th>
                                    <th className='border border-black w-12'>ระยะเวลา</th>
                                    <th className='border border-black'>วัตถุประสงค์</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='border border-black px-1'>_ga, _ga_*</td>
                                    <td className='border border-black px-1'>วิเคราะห์</td>
                                    <td className='border border-black px-1'>30 วัน</td>
                                    <td className='border border-black px-1'>เพื่อใช้ Google Analytics เข้ามาสังเกตการณ์การเข้าใช้งานเว็บไซต์ และนำไปใช้ในการบริหารจัดการระบบและปรับปรุงประสิทธิภาพเว็บไซต์ให้ดียิ่งขึ้น คุกกี้เหล่านี้จะถูกลบเมื่อปิดเว็บเบราว์เซอร์</td>
                                </tr>
                            </tbody>
                        </table>
                    </li>
                    <li>
                        <h3>การจัดการคุกกี้</h3>
                        <p>
                            ท่านสามารถเลือกตั้งค่าคุกกี้แต่ละประเภทได้โดย “การตั้งค่าคุกกี้” หรือ การตั้งค่าในเว็บเบราว์เซอร์ (web browser) เช่น ห้ามการติดตั้งคุกกี้ลงบนอุปกรณ์ของท่าน
                        </p>
                    </li>
                    <li>
                        <h3>การทบทวนและปรับปรุงนโยบายคุกกี้</h3>
                        <p>
                            นโยบายเกี่ยวกับการใช้งาน Cookies เว็บไซต์ MakeItRainProject ปรับปรุงล่าสุดเมื่อวันที่ 8 พฤษภาคม 2566 เราขอสงวนสิทธิ์ในการเปลี่ยนแปลงแก้ไข หรือเพิ่มเติมบางส่วนของนโยบายเกี่ยวกับการใช้งาน Cookie นี้ ในกรณีที่มีการเปลี่ยนแปลงในสาระสำคัญเราจะแจ้งให้ท่านทราบตามช่องทางที่เหมาะสมต่อไป โดยท่านสามารถเข้ามาตรวจสอบความเปลี่ยนแปลงนโยบายเกี่ยวกับการใช้งาน Cookie นี้ได้
                        </p>
                    </li>
                </ul>
                {/* <button className='text-xl font-bold rounded-md px-2 py-1 cursor-pointer mt-4 m-x-auto' onClick={() => navigate(-1)}>&lt;- ย้อนกลับ</button> */}
            </div>
        </div>
    )
}

export default CookiePolicy