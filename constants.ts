import { Question } from './types';

export const QUIZ_DATA: Question[] = [
  // --- NHÓM NHẠC CỤ DÂY ---
  {
    id: 1,
    type: 'image',
    title: "Nhạc cụ độc đáo này của Việt Nam có tên là gì?",
    mediaUrl: "https://nhaccutienmanh.vn/wp-content/uploads/2019/12/dan-bau-mot-day.jpg", [cite: 36]
    correctAnswer: "Đàn Bầu", [cite: 1]
    customOptions: ["Đàn Bầu", "Đàn Đáy", "Đàn Tranh", "Đàn Nhị"], [cite: 1]
    explanation: "Đàn Bầu (Độc huyền cầm) chỉ có đúng 1 dây, dùng vòi đàn (cần đàn) để thay đổi độ căng của dây, tạo ra âm thanh nỉ non, luyến láy như tiếng người.", [cite: 1, 2]
  },
  {
    id: 2,
    type: 'image',
    title: "Cây đàn có nhiều dây (16, 17, 19 hoặc 22 dây) này tên là gì?",
    mediaUrl: "https://nhaccutienmanh.vn/wp-content/uploads/2019/10/dan-tranh-ta-tham-19-day-t19m1x-550x550.jpg", [cite: 36]
    correctAnswer: "Đàn Tranh", [cite: 2]
    explanation: "Đàn Tranh có âm thanh trong trẻo, réo rắt. Người chơi thường đeo móng gẩy vào 3 ngón tay phải để gảy dây đàn.", [cite: 2]
  },
  {
    id: 3,
    type: 'image',
    title: "Đây là nhạc cụ thường thấy trong nghệ thuật Hát Văn. Tên nó là gì?",
    mediaUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmSgmOTscggBTRgQXo4e_cBk4bRb-lmH3un4X0J-T-eA&s", [cite: 36]
    correctAnswer: "Đàn Nguyệt", [cite: 3]
    customOptions: ["Đàn Nguyệt", "Đàn Tỳ Bà", "Đàn Sến", "Đàn Đoản"], [cite: 3]
    explanation: "Đàn Nguyệt (còn gọi là Đàn Kìm) có thùng đàn tròn như mặt trăng, có 2 dây, âm sắc phong phú từ nỉ non đến rộn ràng.", [cite: 3]
  },
  {
    id: 4,
    type: 'image',
    title: "Loại đàn kéo vĩ có 2 dây này tên là gì?",
    mediaUrl: "https://bannhaccu.com.vn/Pictures/Dan-Nhi-2.jpg", [cite: 36]
    correctAnswer: "Đàn Nhị", [cite: 4]
    explanation: "Đàn Nhị (Đàn Cò) đóng vai trò nòng cốt trong nhiều dàn nhạc dân tộc. Bát nhị (hộp cộng hưởng) thường bịt bằng da trăn hoặc da kỳ đà.", [cite: 4, 5]
  },
  {
    id: 5,
    type: 'image',
    title: "Nhạc cụ hình quả lê này có nguồn gốc lâu đời, tên nó là gì?",
    mediaUrl: "https://nhacculinhnhi.com/storage/2023/09/dan-ty-ba-1.jpg", [cite: 36]
    correctAnswer: "Đàn Tỳ Bà", [cite: 5]
    customOptions: ["Đàn Tỳ Bà", "Đàn Đáy", "Đàn Kìm", "Đàn Tam"], [cite: 5]
    explanation: "Đàn Tỳ Bà có 4 dây, thùng đàn hình quả lê cắt dọc. Thường xuất hiện trong Nhã nhạc cung đình Huế.", [cite: 5, 6]
  },
  {
    id: 6,
    type: 'image',
    title: "Cây đàn đặc trưng chỉ dùng trong nghệ thuật Ca Trù này là gì?",
    mediaUrl: "https://product.hstatic.net/200000903353/product/1_d140335c6418416a820bc34640e72ebf_master.jpg", [cite: 36]
    correctAnswer: "Đàn Đáy", [cite: 6]
    explanation: "Đàn Đáy có cần đàn rất dài, thùng đàn hình chữ nhật hoặc hình thang, không có lỗ thoát âm. Chỉ có ở Việt Nam.", [cite: 6, 7]
  },
  {
    id: 7,
    type: 'image',
    title: "Nhạc cụ có thùng đàn hình bông hoa mai này tên là gì?",
    mediaUrl: "https://khanhhungaudio.com/uploads/shops/2014_09/dan-sen.jpg", [cite: 37]
    correctAnswer: "Đàn Sến", [cite: 7]
    explanation: "Đàn Sến có 2 dây, cần đàn nhiều phím, thường dùng trong dàn nhạc múa rối và Cải lương ở miền Nam.", [cite: 7]
  },
  {
    id: 8,
    type: 'image',
    title: "Đây là nhạc cụ thân thuộc của dân tộc Tày, Nùng, Thái. Đó là đàn gì?",
    mediaUrl: "https://nhacculinhnhi.com/storage/2021/02/z2338731420433_fecad0f55bbc2fe28afb55f6f03925b0-removebg-preview.png", [cite: 36]
    correctAnswer: "Đàn Tính", [cite: 8]
    customOptions: ["Đàn Tính", "Đàn Gáo", "Đàn Hồ", "Đàn Tam"], [cite: 8]
    explanation: "Đàn Tính (Tính tẩu) có bầu đàn làm bằng quả bầu khô cắt ngang, là nhạc cụ chính trong nghệ thuật Hát Then.", [cite: 8]
  },
  {
    id: 9,
    type: 'image',
    title: "Nhạc cụ kéo vĩ này có bầu cộng hưởng làm bằng gáo dừa?",
    mediaUrl: "https://cuahangnhaccu.vn/upload/sanpham/dangaogovap-1466424369.jpg", [cite: 37]
    correctAnswer: "Đàn Gáo", [cite: 8]
    explanation: "Đàn Gáo to hơn Đàn Nhị, bầu đàn làm từ gáo dừa, mang lại âm thanh trầm ấm, vang vọng hơn.", [cite: 9]
  },
  {
    id: 10,
    type: 'image',
    title: "Đàn có 3 dây, thùng đàn bịt da trăn, tên là gì?",
    mediaUrl: "https://nhacculinhnhi.com/storage/2021/04/IMG_1690-removebg-preview.png", [cite: 37]
    correctAnswer: "Đàn Tam", [cite: 9]
    explanation: "Đàn Tam có 3 dây, không có phím, âm thanh sắc, giòn, thường dùng để giữ nhịp điệu rộn ràng trong dàn nhạc.", [cite: 9]
  },

  // --- NHÓM GÕ / TỰ THÂN VANG ---
  {
    id: 11,
    type: 'image',
    title: "Bảo vật quốc gia, biểu tượng của nền văn minh Đông Sơn là gì?",
    mediaUrl: "https://belux.com.vn/Files/239/download/tu-van-qua-tang/66da91d6f09726a2aa3eecc8f28d2476.jpg", [cite: 37]
    correctAnswer: "Trống Đồng", [cite: 10]
    customOptions: ["Trống Đồng", "Trống Cái", "Cồng Chiêng", "Trống Cơm"], [cite: 10]
    explanation: "Trống Đồng không chỉ là nhạc cụ nghi lễ mà còn là biểu tượng quyền lực của các thủ lĩnh thời Hùng Vương.", [cite: 10]
  },
  {
    id: 12,
    type: 'image',
    title: "Nhạc cụ Tây Nguyên làm từ các ống tre, nứa có độ dài ngắn khác nhau?",
    mediaUrl: "https://product.hstatic.net/200000903353/product/t-rung__2__493274d4c628407090c18a2b82ad36bb_master.jpg", [cite: 36]
    correctAnswer: "Đàn T'rưng", [cite: 11]
    explanation: "Đàn T'rưng mô phỏng âm thanh của tiếng suối chảy, tiếng thác đổ, là nhạc cụ gõ đặc trưng của người Ba Na, Gia Rai.", [cite: 11]
  },
  {
    id: 13,
    type: 'image',
    title: "Nhạc cụ bằng đồng, không có núm, thường đi theo dàn ở Tây Nguyên?",
    mediaUrl: "https://congthuong.vn/am-vang-cong-chieng-giua-dai-ngan-239530.html", [cite: 36]
    correctAnswer: "Chiêng", [cite: 11]
    customOptions: ["Chiêng", "Cồng", "Não Bạt", "Thanh La"], [cite: 12]
    explanation: "Trong Không gian văn hóa Cồng Chiêng Tây Nguyên: 'Cồng' là loại có núm ở giữa, còn 'Chiêng' là loại mặt phẳng không núm.", [cite: 12]
  },
  {
    id: 14,
    type: 'image',
    title: "Nhạc cụ Tây Nguyên được chơi bằng cách 'vỗ tay' vào miệng ống tre?",
    mediaUrl: "https://tatham.vn/media/product/3652_1_2.jpg", [cite: 37]
    correctAnswer: "K'lông Pút", [cite: 12]
    explanation: "Người chơi K'lông Pút khum hai bàn tay lại và vỗ vào nhau trước miệng các ống tre để luồng hơi tống vào ống tạo ra âm thanh.", [cite: 12, 13]
  },
  {
    id: 15,
    type: 'image',
    title: "Loại trống dài, bịt da 2 mặt, dùng tay vỗ, mang tên một loại thức ăn?",
    mediaUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Tr%E1%BB%91ng_c%C6%A1m_-_55cm.jpg", [cite: 37]
    correctAnswer: "Trống Cơm", [cite: 13]
    explanation: "Trống Cơm có đặc điểm trước khi đánh, người ta thường lấy cơm nếp nhào nhuyễn dán vào 2 mặt trống để định âm.", [cite: 13]
  },
  {
    id: 16,
    type: 'image',
    title: "Nhạc cụ cổ đại làm từ các phiến đá có kích thước, độ dày khác nhau?",
    mediaUrl: "https://images2.thanhnien.vn/528068263637045248/2023/2/15/dan-da-16764299044501965694808.jpg", [cite: 36]
    correctAnswer: "Đàn Đá", [cite: 14]
    explanation: "Đàn Đá là một trong những nhạc cụ cổ sơ nhất của nhân loại, được tìm thấy ở vùng núi Nam Trung Bộ và Tây Nguyên.", [cite: 14]
  },
  {
    id: 17,
    type: 'image',
    title: "Nhạc cụ gõ nhỏ bé bằng sừng hoặc gỗ dừa, dùng để giữ nhịp Cải Lương?",
    mediaUrl: "https://thanhnien.vn/di-tim-nguon-goc-song-lang-loan-trong-don-ca-tai-tu-nam-bo-1851399785.htm", [cite: 37]
    correctAnswer: "Song Lang", [cite: 15]
    customOptions: ["Song Lang", "Phách", "Mõ", "Sênh Tiền"], [cite: 15]
    explanation: "Song Lang (Song loan) có một thanh thép đàn hồi gắn viên gỗ tròn, gõ xuống thân tạo ra tiếng 'cắc', là linh hồn giữ nhịp của Đờn ca tài tử.", [cite: 15]
  },
  {
    id: 18,
    type: 'image',
    title: "Cặp đĩa đồng đập vào nhau tạo âm thanh vang chói tên là gì?",
    mediaUrl: "https://phongvans.com/wp-content/uploads/2019/03/chum-choe-dong-6-cm.jpg", [cite: 37]
    correctAnswer: "Chũm Chọe", [cite: 15]
    customOptions: ["Chũm Chọe", "Thanh La", "Chuông", "Mõ"], [cite: 15, 16]
    explanation: "Chũm chọe (hay Não bạt) dùng nhiều trong Múa Lân, Nhã nhạc cung đình, tuồng, chèo để tạo điểm nhấn âm thanh mạnh mẽ.", [cite: 16]
  },
  {
    id: 19,
    type: 'image',
    title: "Nhạc cụ gồm 3 thanh gỗ, có gắn các đồng xu kim loại?",
    mediaUrl: "https://dotchuoinon.com/wp-content/uploads/2015/07/senhtien5.jpg", [cite: 37]
    correctAnswer: "Sênh Tiền", [cite: 16]
    explanation: "Sênh Tiền (Sinh tiền) kết hợp giữa gõ (thanh gỗ) và rung (tiếng đồng xu va chạm), thường thấy trong Múa Sinh Tiền cung đình Huế.", [cite: 16, 17]
  },
  {
    id: 20,
    type: 'image',
    title: "Khối gỗ rỗng ruột, dùng dùi gõ, thường thấy ở chùa hoặc làng quê xưa?",
    mediaUrl: "https://cuahangnhaccu.vn/nhac-cu/mo-trong-dan.html", [cite: 37]
    correctAnswer: "Mõ", [cite: 17]
    explanation: "Mõ có nhiều loại: Mõ tụng kinh trong chùa, hoặc mõ làng (làm bằng gốc tre/gỗ) dùng để báo động, tập hợp dân làng.", [cite: 17]
  },
  {
    id: 21,
    type: 'image',
    title: "Chiếc trống nhỏ dùng để 'đế' (hỗ trợ, khen ngợi) trong nghệ thuật Chèo?",
    mediaUrl: "https://upload.wikimedia.org/wikipedia/commons/1/10/Tr%E1%BB%91ng_%C4%91%E1%BA%BF.jpg", [cite: 37]
    correctAnswer: "Trống Đế", [cite: 18]
    explanation: "Trống Đế tuy nhỏ nhưng âm thanh sắc gọn. Người đánh trống đế đóng vai trò dẫn dắt nhịp độ và tạo hứng khởi cho diễn viên Chèo.", [cite: 18, 19]
  },
  {
    id: 22,
    type: 'image',
    title: "Hai thanh tre hoặc gỗ cứng dùng để gõ vào nhau giữ nhịp trong Ca Trù?",
    mediaUrl: "https://thietbituonglai.vn/wp-content/uploads/2022/03/bo-thanh-phach-1.png", [cite: 37]
    correctAnswer: "Phách", [cite: 19]
    explanation: "Bộ Phách trong Ca Trù gồm 1 bàn phách và 2 dùi gõ (1 dùi tròn, 1 dùi chẻ đôi), do chính nữ ca nương vừa hát vừa gõ.", [cite: 19]
  },

  // --- NHÓM NHẠC CỤ HƠI ---
  {
    id: 23,
    type: 'image',
    title: "Nhạc cụ thổi bằng tre trúc, thổi ngang, rất phổ biến ở Việt Nam?",
    mediaUrl: "https://shopguitardanang.com/wp-content/uploads/2019/11/sao-tr%C3%BAc-1.jpg", [cite: 36]
    correctAnswer: "Sáo Trúc", [cite: 20]
    explanation: "Sáo Trúc Việt Nam thường có 6 lỗ bấm, âm thanh trong sáng, bay bổng, gắn liền với hình ảnh chú bé chăn trâu.", [cite: 20]
  },
  {
    id: 24,
    type: 'image',
    title: "Giống sáo nhưng thổi dọc, âm thanh trầm ấm, u tịch?",
    mediaUrl: "https://dotchuoinon.com/wp-content/uploads/2015/08/tieu_sc3a1o-ngang.jpg?w=584", [cite: 37]
    correctAnswer: "Tiêu", [cite: 21]
    customOptions: ["Tiêu", "Sáo Trúc", "Đing Tút", "Kèn"], [cite: 21]
    explanation: "Tiêu dài hơn Sáo, thổi dọc qua một lỗ khuyết ở đầu ống. Âm tiêu trầm ấm, thích hợp với các giai điệu sâu lắng.", [cite: 21, 22]
  },
  {
    id: 25,
    type: 'image',
    title: "Nhạc cụ hơi có loa kèn bằng vỏ quả bầu khô?",
    mediaUrl: "https://nhaccutrantrung.com/wp-content/uploads/2020/04/Untitled-15.jpg", [cite: 37]
    correctAnswer: "Kèn Bầu", [cite: 22]
    explanation: "Kèn Bầu dùng dăm kép để tạo âm thanh, loa làm bằng vỏ bầu. Âm thanh vang, chói, thường dùng trong đám tang, đám rước.", [cite: 22, 23]
  },
  {
    id: 26,
    type: 'image',
    title: "Nhạc cụ bằng đồng/thau, đa ống, gắn liền với các chàng trai H'Mông?",
    mediaUrl: "https://dotchuoinon.com/wp-content/uploads/2015/07/kenh_ke1bb81nh-mc3b4ng.jpg", [cite: 36]
    correctAnswer: "Khèn", [cite: 23]
    explanation: "Khèn H'Mông gồm nhiều ống trúc cắm qua một bầu gỗ. Các chàng trai H'Mông vừa thổi khèn vừa múa để tỏ tình trong các dịp lễ hội.", [cite: 23, 24]
  },
  {
    id: 27,
    type: 'image',
    title: "Nhạc cụ thổi bằng 1 miếng lá cây tuơi?",
    mediaUrl: "http://mnphudong.edu.vn/tin-tuc/cach-lam-ken-khong-lo-bang-la-dua.html", [cite: 37]
    correctAnswer: "Kèn Lá", [cite: 24]
    customOptions: ["Kèn Lá", "Đàn Môi", "Tù Và", "Sáo Mèo"], [cite: 24]
    explanation: "Kèn Lá chỉ là một chiếc lá cây tươi gập lại, ngậm vào môi để thổi. Âm thanh lảnh lót như tiếng chim hót.", [cite: 24, 25]
  },
  {
    id: 28,
    type: 'image',
    title: "Nhạc cụ hơi đặc trưng của dân tộc Ê Đê, bầu làm từ quả bầu khô gắn 6 ống trúc?",
    mediaUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/E_De_Ding_nam.png/330px-E_De_Ding_nam.png", [cite: 37]
    correctAnswer: "Đing Năm", [cite: 25]
    explanation: "Đing Năm thổi bằng bầu, là nhạc cụ yêu thích của dân tộc Tây Nguyên, dùng nhiều trong các điệu múa Ay-ray.", [cite: 25]
  },
  {
    id: 29,
    type: 'image',
    title: "Nhạc cụ làm từ sừng trâu, sừng bò, âm thanh vang vọng núi rừng?",
    mediaUrl: "https://nhacculinhnhi.com/storage/2024/11/tu-va-1.png", [cite: 37]
    correctAnswer: "Tù Và", [cite: 26]
    explanation: "Tù Và không có lỗ bấm, chỉ tạo ra 1-2 cao độ. Thường dùng làm hiệu lệnh báo động hoặc gọi dân làng ở các vùng dân tộc thiểu số.", [cite: 26, 27]
  },
  {
    id: 30,
    type: 'image',
    title: "Sáo có gắn lam đồng (lưỡi gà) tạo âm thanh khò khè đặc trưng của vùng Tây Bắc?",
    mediaUrl: "https://nhaccudantoc.com.vn/wp-content/uploads/2022/02/Sao-meo-VN-2.jpg", [cite: 37]
    correctAnswer: "Sáo Mèo", [cite: 27]
    customOptions: ["Sáo Mèo", "Sáo Trúc", "Tiêu", "Khèn"], [cite: 27]
    explanation: "Sáo Mèo phát ra âm thanh nhờ một lam đồng gắn ở đầu sáo. Âm thanh trầm, ấm, mờ ảo rất đặc trưng của vùng núi Tây Bắc.", [cite: 27, 28]
  },

  // --- NHÓM ĐỘC ĐÁO & ÍT NGƯỜI BIẾT ---
  {
    id: 31,
    type: 'image',
    title: "Một lá đồng mỏng nhỏ xíu, ngậm vào môi, dùng ngón tay gẩy để phát ra tiếng?",
    mediaUrl: "https://nhaccuphongvan.vn/wp-content/uploads/2015/05/kenh-moi-phong-van-6.jpg", [cite: 37]
    correctAnswer: "Đàn Môi", [cite: 28]
    explanation: "Đàn Môi mượn khoang miệng của người chơi làm hộp cộng hưởng. Rất phổ biến ở các dân tộc miền núi phía Bắc.", [cite: 28, 29]
  },
  {
    id: 32,
    type: 'image',
    title: "Chiếc trống to nhất, đặt ở đình làng, đánh bằng dùi gỗ lớn?",
    mediaUrl: "https://vietnamtourism.vn/imguploads/tourist/2014/VNDatNuocConNguoi/02VanHoa/04Nghethuatbieudien/48Trongcai/trongcai.png", [cite: 37]
    correctAnswer: "Trống Cái", [cite: 29]
    explanation: "Trống Cái (Trống sấm) có kích thước rất lớn, âm thanh trầm và vang xa, dùng trong lễ hội, báo giờ hoặc thúc quân.", [cite: 29]
  },
  {
    id: 33,
    type: 'image',
    title: "Loại đàn Tây Nguyên dùng vĩ kéo có 2 dây",
    mediaUrl: "https://statics.vinpearl.com/Vietnamese-Instruments-7_1703253243.jpg", [cite: 30]
    correctAnswer: "Đàn Nhị", [cite: 30]
    customOptions: ["Đàn K'ni", "Đàn Bầu", "Đàn Đáy", "Goong"], [cite: 30]
    explanation: "Đàn K'ni của người Ba Na, Gia Rai rất độc đáo vì người chơi dùng khoang miệng để khuếch đại và biến đổi âm thanh của đàn.", [cite: 30]
  },
  {
    id: 34,
    type: 'image',
    title: "Nhạc cụ gõ bằng mảnh đồng thau tròn phẳng, dùng rùi gỗ bọc vải gõ vào?",
    mediaUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Thanh_la.jpg/330px-Thanh_la.jpg", [cite: 37]
    correctAnswer: "Thanh La", [cite: 30]
    explanation: "Thanh La có kích thước nhỏ hơn chiêng, không núm. Âm thanh sắc, cao, vang xa, dùng nhiều trong chèo, múa lân, nhã nhạc.", [cite: 31, 32]
  },
  {
    id: 35,
    type: 'youtube',
    title: "Nhạc cụ gõ truyền thống này tên là gì? (Nhấn Play để nghe)",
    mediaUrl: "https://www.youtube.com/embed/5T8kEemwPj4", [cite: 33]
    correctAnswer: "Đàn Đá", [cite: 33]
    customOptions: ["Đàn Đá", "Đàn T'rưng", "Cồng Chiêng", "Mõ"], [cite: 33]
    explanation: "Đây là ví dụ về Đàn Đá. Các viên đá có kích thước khác nhau khi gõ vào sẽ phát ra các nốt nhạc chuẩn xác đến kinh ngạc.", [cite: 33, 34]
  }
];
