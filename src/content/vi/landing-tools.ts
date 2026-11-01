import type { LandingText } from "../types";

export const landingTools: Record<string, LandingText> = {
  "team-generator": {
    name: "Chia đội ngẫu nhiên",
    card: "Chia danh sách tên thành các đội công bằng, ngẫu nhiên.",
    seoTitle: "Chia đội ngẫu nhiên – Chia nhóm công bằng online",
    metaDescription: "Công cụ chia đội ngẫu nhiên miễn phí. Dán danh sách tên, chọn số đội hoặc số người mỗi đội và có ngay các nhóm cân bằng chỉ với một cú bấm.",
    h1: "Chia đội ngẫu nhiên",
    lead: "Dán danh sách, chọn số đội bạn cần và có ngay các nhóm ngẫu nhiên cân bằng.",
    sections: [
      {
        heading: "Các đội luôn cân bằng",
        paragraphs: [
          "Công cụ trộn danh sách bằng thuật toán trộn an toàn chuẩn mật mã, rồi chia lần lượt từng người như chia bài. Nhờ vậy số người giữa các đội không bao giờ chênh quá một — chia 13 người thành 3 đội sẽ được 5, 4 và 4.",
          "Bạn có thể chia theo số đội (ví dụ bốn nhóm cho bốn trạm) hoặc số người mỗi đội (ví dụ cặp đôi hay nhóm ba). Đặt tên đội như Đỏ, Xanh, Vàng rồi sao chép kết quả để dán vào nhóm chat, tài liệu hay slide.",
        ],
      },
      {
        heading: "Khi nào nên chia đội ngẫu nhiên",
        list: ["Dự án nhóm và ghép cặp thí nghiệm trên lớp", "Đá bóng, bóng rổ, kéo co giờ ra chơi", "Hoạt động team building và hackathon", "Đố vui và trò chơi tiệc tùng", "Chia phòng nhỏ trong họp trực tuyến"],
      },
      {
        heading: "Vì sao ngẫu nhiên tốt hơn để đội trưởng chọn",
        paragraphs: ["Để đội trưởng chọn người là truyền thống lâu đời — và cũng là cách chắc chắn khiến ai đó thấy bị bỏ rơi. Chia ngẫu nhiên nhanh hơn, xáo trộn các nhóm bạn thân và không ai nghi ngờ thiên vị. Nếu cần cân bằng trình độ, hãy chia vài lần và chọn cách chia đều nhất, hoặc chia riêng nhóm có kinh nghiệm và nhóm mới rồi ghép lại."],
      },
    ],
    howTo: [
      { title: "Dán danh sách tên", text: "Mỗi dòng một tên hoặc cách nhau bằng dấu phẩy. Tên trùng tự bị loại." },
      { title: "Chọn cách chia", text: "Đặt số đội hoặc số người mỗi đội." },
      { title: "Đặt tên đội", text: "Tùy chọn: thêm tên đội cách nhau bằng dấu phẩy." },
      { title: "Chia", text: "Sao chép kết quả hoặc chia lại để có cách xếp mới." },
    ],
    benefits: [
      { title: "Sĩ số đều", text: "Các đội chênh nhau không quá một người." },
      { title: "Ngẫu nhiên thật", text: "Dùng thuật toán trộn Fisher–Yates an toàn." },
      { title: "Dễ chia sẻ", text: "Chép tất cả các đội dạng văn bản chỉ với một cú bấm." },
      { title: "Riêng tư", text: "Tên chỉ được xử lý trong trình duyệt của bạn." },
    ],
    faqs: [
      { q: "Làm sao để các đội được chia công bằng?", a: "Danh sách được trộn bằng thuật toán Fisher–Yates không thiên vị, dùng bộ sinh số ngẫu nhiên mật mã học của trình duyệt, sau đó chia lần lượt để sĩ số cân bằng." },
      { q: "Có ghép cặp được không?", a: "Được. Chọn Số người mỗi đội và nhập 2. Nếu số người lẻ, sẽ có một nhóm ba người." },
      { q: "Có giới hạn số tên không?", a: "Bạn có thể dán hàng trăm tên; công cụ chia ngay lập tức." },
      { q: "Có giữ vài người chung đội được không?", a: "Không tự động. Mẹo đơn giản là ghi họ trên cùng một dòng, như “Nam & Lan”, để được tính là một mục." },
    ],
  },
  "random-number-generator": {
    name: "Tạo số ngẫu nhiên",
    card: "Chọn số ngẫu nhiên trong khoảng bất kỳ, có hoặc không lặp lại.",
    seoTitle: "Tạo số ngẫu nhiên – Random số trong khoảng bất kỳ",
    metaDescription: "Tạo số ngẫu nhiên giữa số nhỏ nhất và lớn nhất bất kỳ. Rút một hoặc tối đa 1.000 số, có hoặc không lặp, có thể sắp xếp. Miễn phí và an toàn.",
    h1: "Tạo số ngẫu nhiên",
    lead: "Chọn khoảng số, chọn số lượng và nhận kết quả ngẫu nhiên không thiên vị ngay lập tức.",
    sections: [
      {
        heading: "Số an toàn, không thiên vị",
        paragraphs: [
          "Nhiều công cụ random đơn giản dùng Math.random — đủ cho trò chơi nhưng không được thiết kế để khó đoán. Công cụ này dùng Web Crypto API kèm lấy mẫu loại bỏ, cách được khuyến nghị cho mã nguồn cần bảo mật. Mọi số trong khoảng đều có cơ hội như nhau, kể cả khoảng rất lớn.",
          "Bật Không lặp lại để rút các số khác nhau — tiện cho bốc thăm, xổ số vui giữa bạn bè hay gán mã ngẫu nhiên. Mỗi lần tạo tối đa 1.000 số và có thể sắp xếp.",
        ],
      },
      {
        heading: "Cách dùng phổ biến",
        list: ["Bốc thăm trúng thưởng", "Chọn người thắng theo số vé", "Bài học thống kê và xác suất", "Chọn ngẫu nhiên trang, câu hỏi hoặc ghế ngồi", "Trò chơi cần xúc xắc mà bạn không có"],
      },
    ],
    howTo: [
      { title: "Đặt khoảng", text: "Nhập số nhỏ nhất và lớn nhất. Số âm cũng được." },
      { title: "Chọn số lượng", text: "Rút 1 hoặc tối đa 1.000 số." },
      { title: "Tùy chọn", text: "Cho phép hoặc không cho lặp, và có sắp xếp hay không." },
      { title: "Tạo", text: "Sao chép kết quả hoặc tạo lại." },
    ],
    benefits: [
      { title: "Mọi khoảng số", text: "Từ 1–6 đến cộng trừ bốn triệu tỷ." },
      { title: "Không lặp lại", text: "Rút số khác nhau cho bốc thăm." },
      { title: "Chuẩn mật mã", text: "Dùng crypto.getRandomValues, không phải Math.random." },
      { title: "Lịch sử", text: "Xem các kết quả trước ngay bên dưới." },
    ],
    faqs: [
      { q: "Công cụ tạo số này có thật sự ngẫu nhiên không?", a: "Nó dùng bộ sinh số ngẫu nhiên an toàn chuẩn mật mã của thiết bị, đủ tiêu chuẩn cho mục đích bảo mật. Lấy mẫu loại bỏ xóa bỏ sai lệch nhỏ do phép chia lấy dư đơn giản." },
      { q: "Làm sao chọn số kiểu xổ số?", a: "Đặt khoảng (ví dụ 1 đến 45), Số lượng là 6 và bật Không lặp lại. Lưu ý kết quả chỉ để giải trí và không giúp tăng cơ hội trúng xổ số thật." },
      { q: "Có tạo số thập phân được không?", a: "Công cụ tạo số nguyên. Muốn số thập phân, hãy tạo khoảng lớn hơn rồi chia — ví dụ 1 đến 1000 chia 100 sẽ được hai chữ số thập phân." },
    ],
  },
  "random-letter-generator": {
    name: "Tạo chữ cái ngẫu nhiên",
    card: "Rút chữ cái ngẫu nhiên cho trò chơi chữ và luyện đọc.",
    seoTitle: "Tạo chữ cái ngẫu nhiên – Random chữ cái A–Z",
    metaDescription: "Tạo chữ cái ngẫu nhiên từ A đến Z. Chọn nguyên âm hoặc phụ âm, chữ hoa hoặc thường, bỏ chữ khó và rút nhiều chữ không lặp lại.",
    h1: "Tạo chữ cái ngẫu nhiên",
    lead: "Rút một chữ cái hoặc vài chữ cùng lúc — có tùy chọn nguyên âm, phụ âm và bỏ qua chữ khó.",
    sections: [
      {
        heading: "Sinh ra cho trò chơi chữ",
        paragraphs: [
          "Trò chơi theo chủ đề, xếp chữ và thi đánh vần đều bắt đầu bằng một chữ cái ngẫu nhiên. Tùy chọn Bỏ chữ khó loại Q, U, V, X, Y và Z — những chữ hay làm trò chơi bị tắc vì khó tìm từ cho từng chủ đề.",
          "Cần chữ cho trò ghép từ? Rút bảy chữ không lặp, hoặc trộn nguyên âm và phụ âm bằng cách rút riêng từng nhóm.",
        ],
      },
      {
        heading: "Cho giáo viên và phụ huynh",
        paragraphs: ["Dùng cặp chữ hoa và thường (Aa, Bb) để làm quen mặt chữ, chỉ nguyên âm để luyện vần, hoặc một loạt chữ để khởi động đánh vần nhanh. Công cụ hiển thị đẹp trên máy chiếu và máy tính bảng."],
        list: ["Khởi động đọc âm chữ cái", "Kể ba thứ bắt đầu bằng…", "Ghép từ dài nhất từ các chữ này", "Gợi ý luyện viết chữ"],
      },
    ],
    howTo: [
      { title: "Chọn nhóm chữ", text: "Tất cả, chỉ nguyên âm hoặc chỉ phụ âm." },
      { title: "Chọn kiểu chữ", text: "Chữ hoa, chữ thường hoặc cả hai." },
      { title: "Đặt số lượng", text: "Rút 1 đến 26 chữ, có hoặc không lặp." },
      { title: "Tạo", text: "Chữ cái hiện ra ngay lập tức." },
    ],
    benefits: [
      { title: "Hợp với trò chơi", text: "Bỏ chữ khó để trò chơi trôi chảy hơn." },
      { title: "Nhóm chữ linh hoạt", text: "Nguyên âm, phụ âm hoặc cả bảng chữ cái." },
      { title: "Không lặp lại", text: "Rút chữ khác nhau cho trò ghép chữ." },
      { title: "Công bằng", text: "Mọi chữ cái có cơ hội như nhau." },
    ],
    faqs: [
      { q: "Có loại bỏ một số chữ được không?", a: "Dùng Bỏ chữ khó để loại Q, U, V, X, Y và Z, hoặc dùng Vòng quay chữ cái — nơi bạn ẩn được bất kỳ chữ nào." },
      { q: "Có chữ cái tiếng Việt có dấu không?", a: "Công cụ dùng 26 chữ cái Latin cơ bản. Bạn có thể thêm Ă, Â, Đ, Ê, Ô, Ơ, Ư vào một vòng quay tự tạo." },
      { q: "Y được tính là nguyên âm không?", a: "Trong bộ lọc nguyên âm và phụ âm, Y được tính là phụ âm." },
    ],
  },
  "dice-roller": {
    name: "Đổ xúc xắc",
    card: "Đổ tối đa 12 xúc xắc — d4, d6, d8, d10, d12, d20 hoặc d100.",
    seoTitle: "Đổ xúc xắc online – Xúc xắc ảo từ d4 đến d100",
    metaDescription: "Đổ tối đa 12 xúc xắc ảo online: d4, d6, d8, d10, d12, d20 hoặc d100. Cộng điểm, xem tổng và lịch sử các lần đổ. Công bằng, nhanh, miễn phí.",
    h1: "Đổ xúc xắc online",
    lead: "Mất xúc xắc? Đổ tối đa mười hai viên cùng lúc, từ xúc xắc 4 mặt d4 đến xúc xắc 100 mặt d100.",
    sections: [
      {
        heading: "Đủ mọi loại xúc xắc",
        paragraphs: [
          "Cờ tỷ phú, cá ngựa chủ yếu dùng xúc xắc sáu mặt, nhưng các trò nhập vai trên bàn dùng cả bộ: d4, d6, d8, d10, d12, d20 và d100. Chọn loại và số lượng, thêm điểm cộng hoặc trừ, công cụ sẽ hiện từng viên và tổng điểm.",
          "Các lần đổ gần đây được liệt kê bên dưới để bạn xem lại hai lượt trước đã ra gì — tiện khi cả bàn tranh cãi.",
        ],
      },
      {
        heading: "Đổ công bằng",
        paragraphs: ["Xúc xắc thật có thể hơi lệch do sản xuất; xúc xắc ảo thì không. Mỗi lần đổ dùng bộ sinh số ngẫu nhiên mật mã học, nên mọi mặt có cơ hội như nhau tuyệt đối."],
      },
      {
        heading: "Phù hợp cho",
        list: ["Board game bị thiếu xúc xắc", "Trò nhập vai (2d6, 1d20+5, 4d6…)", "Bài học toán và xác suất", "Trò chơi tiệc tùng và buổi tối gia đình", "Ra quyết định ngẫu nhiên nhanh"],
      },
    ],
    howTo: [
      { title: "Chọn xúc xắc", text: "Chọn số viên (1–12) và số mặt." },
      { title: "Thêm điểm cộng", text: "Tùy chọn: cộng hoặc trừ một số vào tổng." },
      { title: "Đổ", text: "Xem từng viên và tổng điểm." },
      { title: "Xem lịch sử", text: "Các lần đổ gần đây nằm bên dưới." },
    ],
    benefits: [
      { title: "Bảy loại xúc xắc", text: "d4, d6, d8, d10, d12, d20 và d100." },
      { title: "Tổng và điểm cộng", text: "Không cần nhẩm tính." },
      { title: "Công bằng tuyệt đối", text: "Không mặt nào bị lệch hay mòn." },
      { title: "Luôn sẵn sàng", text: "Chạy trên mọi điện thoại — không cần ứng dụng." },
    ],
    faqs: [
      { q: "Xúc xắc online có công bằng không?", a: "Có. Mỗi mặt được chọn bằng bộ sinh số ngẫu nhiên an toàn chuẩn mật mã và lấy mẫu loại bỏ, nên mọi mặt có khả năng như nhau." },
      { q: "Làm sao đổ 1d20+5?", a: "Đặt Số xúc xắc là 1, Số mặt là d20 và Điểm cộng thêm là 5, rồi nhấn Đổ." },
      { q: "Có đổ nhiều loại xúc xắc cùng lúc được không?", a: "Mỗi lần đổ một loại. Muốn đổ hỗn hợp, hãy đổ lần lượt từng loại — lịch sử sẽ ghi lại cả hai." },
    ],
  },
  "coin-flip": {
    name: "Tung đồng xu",
    card: "Tung đồng xu ảo công bằng, một lần hoặc trăm lần.",
    seoTitle: "Tung đồng xu online – Sấp hay ngửa?",
    metaDescription: "Tung đồng xu ảo online để có kết quả sấp ngửa công bằng. Tung một lần hoặc 100 lần, xem chuỗi liên tiếp và tỉ lệ sấp/ngửa. Miễn phí, tức thì.",
    h1: "Tung đồng xu online",
    lead: "Sấp hay ngửa? Tung một đồng xu ảo công bằng tuyệt đối — một lần để quyết định, hoặc trăm lần để thấy xác suất hoạt động.",
    sections: [
      {
        heading: "Đồng xu công bằng tuyệt đối",
        paragraphs: [
          "Các nhà nghiên cứu phát hiện đồng xu thật khi tung hơi nghiêng về mặt hướng lên lúc bắt đầu. Đồng xu ảo không có mặt ban đầu, không phụ thuộc kỹ thuật búng tay: mỗi lần tung là một lượt 50/50 hoàn toàn mới từ bộ sinh số ngẫu nhiên mật mã học.",
          "Bấm Tung 10 lần hoặc Tung 100 lần để làm thí nghiệm nhanh. Bạn sẽ thấy tỉ lệ sấp/ngửa dao động quanh 50% và tiến gần hơn khi số lần tung tăng lên — chính là luật số lớn.",
        ],
      },
      {
        heading: "Khi nào nên tung đồng xu",
        list: ["Quyết định ai đi trước hay giao bóng", "Phân xử khi hòa giữa hai lựa chọn", "Quyết định có/không nhanh", "Bài học xác suất trên lớp", "Chọn sân trong trò chơi"],
      },
    ],
    howTo: [
      { title: "Chọn mặt", text: "Sấp hay ngửa? Nói to lên." },
      { title: "Tung", text: "Nhấn Tung đồng xu và xem nó xoay." },
      { title: "Xem kết quả", text: "Sấp hoặc ngửa hiện ra kèm thống kê." },
      { title: "Thí nghiệm", text: "Thử Tung 100 lần để thấy tỉ lệ tiến về 50%." },
    ],
    benefits: [
      { title: "Đúng 50/50", text: "Không lệch do trọng lượng, độ mòn hay kỹ thuật." },
      { title: "Tung hàng loạt", text: "Tung 10 hoặc 100 lần ngay lập tức." },
      { title: "Thống kê", text: "Theo dõi tổng, chuỗi liên tiếp và kết quả gần đây." },
      { title: "Hỗ trợ tiếp cận", text: "Kết quả được đọc cho trình đọc màn hình." },
    ],
    faqs: [
      { q: "Tung đồng xu ảo có đúng 50/50 không?", a: "Có. Mỗi lần tung có đúng 50% khả năng ra ngửa, được chọn bằng bộ sinh số ngẫu nhiên mật mã học của trình duyệt." },
      { q: "Sao tôi ra năm lần ngửa liên tiếp?", a: "Chuỗi như vậy là bình thường! Năm lần ngửa liên tiếp có xác suất khoảng 1/32, nên khá hay xảy ra khi tung nhiều." },
      { q: "Có tung nhiều đồng xu được không?", a: "Dùng Tung 10 lần hoặc Tung 100 lần để tung nhiều lần một lúc và xem tổng." },
    ],
  },
  "yes-or-no-picker": {
    name: "Có hay không",
    card: "Nhận câu trả lời có, không hoặc có thể ngay lập tức.",
    seoTitle: "Có hay không – Nhận câu trả lời ngẫu nhiên tức thì",
    metaDescription: "Đặt câu hỏi và nhận ngay câu trả lời có hoặc không ngẫu nhiên. Thêm “Có thể” hoặc chơi thắng 2/3. Cách nhanh, công bằng để quyết định việc nhỏ.",
    h1: "Có hay không?",
    lead: "Gõ câu hỏi (hoặc không cần) và nhận ngay câu trả lời có hay không. Không quay, không chờ.",
    sections: [
      {
        heading: "Khi bạn chỉ cần một câu trả lời",
        paragraphs: [
          "Vòng quay có hay không rất hợp khi bạn muốn hồi hộp. Công cụ này dành cho lúc bạn cần câu trả lời ngay. Nhấn nút là có Có hoặc Không với cơ hội ngang nhau — hoặc bật Có thể để có ba lựa chọn.",
          "Chế độ thắng 2/3 rút ba lần và theo số đông, nhiều người thấy thuyết phục hơn một lần duy nhất. Các câu hỏi và câu trả lời gần đây được liệt kê bên dưới để bạn xem lại.",
        ],
      },
      {
        heading: "Dùng cho khéo",
        paragraphs: ["Câu trả lời ngẫu nhiên rất hợp với lựa chọn nhỏ, có thể thay đổi: ăn tráng miệng hay không, đi bộ hay đi xe, làm ngay hay sau bữa trưa. Với việc quan trọng, hãy dùng nó để kiểm tra trực giác — nếu câu trả lời làm bạn thất vọng, bạn đã biết mình thật sự muốn gì."],
      },
    ],
    howTo: [
      { title: "Hỏi", text: "Gõ câu hỏi có/không, hoặc chỉ cần nghĩ trong đầu." },
      { title: "Tùy chọn", text: "Thêm Có thể hoặc chọn thắng 2/3." },
      { title: "Nhận câu trả lời", text: "Nhấn nút để có kết quả ngay." },
      { title: "Xem lại", text: "Câu trả lời gần đây nằm bên dưới." },
    ],
    benefits: [
      { title: "Tức thì", text: "Không hiệu ứng — câu trả lời hiện ngay." },
      { title: "Công bằng", text: "Mọi câu trả lời có cơ hội ngang nhau." },
      { title: "Thắng 2/3", text: "Theo số đông để thêm chắc chắn." },
      { title: "Riêng tư", text: "Câu hỏi không bao giờ rời khỏi thiết bị." },
    ],
    faqs: [
      { q: "Câu trả lời có/không có ngẫu nhiên không?", a: "Có. Mỗi câu trả lời được chọn bằng bộ sinh số ngẫu nhiên an toàn chuẩn mật mã với cơ hội ngang nhau." },
      { q: "Thắng 2/3 hoạt động thế nào?", a: "Công cụ rút có/không tối đa ba lần và dừng ngay khi một đáp án được hai phiếu. Bạn sẽ thấy từng lượt bên dưới câu trả lời." },
      { q: "Câu hỏi của tôi có bị lưu không?", a: "Chỉ trên trang này khi đang mở. Câu hỏi không được gửi đi đâu cả." },
    ],
  },
  "truth-or-dare-generator": {
    name: "Thật hay thách ngẫu nhiên",
    card: "Câu hỏi thật và thử thách lành mạnh theo độ tuổi.",
    seoTitle: "Thật hay thách – Câu hỏi và thử thách lành mạnh",
    metaDescription: "Công cụ thật hay thách miễn phí với câu hỏi và thử thách lành mạnh cho trẻ em, tuổi teen và người lớn. Không lặp lại, theo lượt người chơi, thẻ hiện ngay.",
    h1: "Thật hay thách ngẫu nhiên",
    lead: "Rút ngay một câu thật hay thách mới. Chọn độ tuổi, thêm người chơi và để trò chơi tự vận hành.",
    sections: [
      {
        heading: "Câu hỏi lành mạnh cho mọi nhóm",
        paragraphs: [
          "Mỗi câu ở đây đều được viết để trò chơi vui mà vẫn thoải mái. Câu cho trẻ em ngộ nghĩnh, nhẹ nhàng; câu cho tuổi teen hợp với buổi ngủ chung và sinh hoạt nhóm; còn bộ dành cho người lớn hướng tới tiệc tùng nơi mọi người muốn cười chứ không muốn ngại.",
          "Câu hỏi không lặp lại cho đến khi bạn đã xem hết danh sách của độ tuổi và loại câu đó, nên chơi lâu vẫn mới.",
        ],
      },
      {
        heading: "Luật chơi giữ cho vui",
        list: [
          "Mỗi người được bỏ qua một lần trong ván, không cần giải thích.",
          "Thử thách phải an toàn và làm được ngay trong phòng.",
          "Không thách dùng điện thoại, đăng lên mạng hay liên lạc người ngoài khi chưa được đồng ý.",
          "Nếu ai đó có vẻ không thoải mái, hãy chuyển tiếp — trò chơi là để vui.",
        ],
      },
      {
        heading: "Thích dùng vòng quay hơn?",
        paragraphs: ["Vòng quay thật hay thách giấu một câu dưới mỗi ô và hé lộ sau khi quay. Bạn có thể tự viết câu hỏi và chia sẻ vòng quay với bạn bè."],
      },
    ],
    howTo: [
      { title: "Chọn độ tuổi", text: "Trẻ em, tuổi teen hoặc người lớn." },
      { title: "Thêm người chơi", text: "Tùy chọn: nhập tên để biết đến lượt ai." },
      { title: "Rút thẻ", text: "Chọn Thật, Thách hoặc Ngẫu nhiên." },
      { title: "Người tiếp theo", text: "Chuyển lượt và rút tiếp." },
    ],
    benefits: [
      { title: "Hợp độ tuổi", text: "Ba bộ câu hỏi được chọn lọc." },
      { title: "Không lặp lại", text: "Hết cả danh sách mới quay vòng." },
      { title: "Theo dõi lượt", text: "Hiện rõ đến lượt ai." },
      { title: "Tức thì", text: "Không cần chuẩn bị hay đăng ký." },
    ],
    faqs: [
      { q: "Các câu hỏi có hợp với trẻ em không?", a: "Bộ Trẻ em được viết cho khoảng 6–12 tuổi, giữ mọi thứ vui và nhẹ nhàng. Luôn chọn bộ phù hợp với người chơi nhỏ tuổi nhất." },
      { q: "Có thêm câu thật/thách của riêng tôi được không?", a: "Hãy dùng Vòng quay thật hay thách để tự viết, lưu và chia sẻ câu hỏi với bạn bè." },
      { q: "Có bao nhiêu câu hỏi?", a: "Mỗi độ tuổi có 15 câu thật và 15 thử thách, không câu nào lặp lại cho đến khi đã rút hết." },
    ],
  },
  "youtube-comment-picker": {
    name: "Chọn bình luận YouTube",
    card: "Chọn ngẫu nhiên người thắng minigame từ bình luận YouTube.",
    seoTitle: "Chọn bình luận YouTube ngẫu nhiên – Quay thưởng minigame",
    metaDescription: "Chọn người thắng ngẫu nhiên từ bình luận YouTube. Lọc theo từ khóa, loại kênh của bạn, mỗi người một lượt và rút nhiều người thắng công bằng.",
    h1: "Chọn bình luận YouTube ngẫu nhiên",
    lead: "Tổ chức minigame công bằng: chọn người thắng ngẫu nhiên từ bình luận video, có lọc từ khóa, lượt trùng và tài khoản bị loại trừ.",
    sections: [
      {
        heading: "Cách hoạt động",
        paragraphs: [
          "Dán liên kết một video YouTube công khai, công cụ sẽ tải các bình luận cấp một qua YouTube Data API chính thức. Sau đó đặt luật — từ khóa bắt buộc, tài khoản loại trừ, và mỗi người một lượt hay mỗi bình luận một lượt — rồi rút số người thắng bạn cần.",
          "Nếu chưa tải tự động được, bạn có thể dán bình luận (mỗi dòng dạng “Tên: bình luận”). Chép từ trang quản lý bình luận trong YouTube Studio hoặc từ tệp xuất bất kỳ.",
        ],
      },
      {
        heading: "Tổ chức minigame đáng tin cậy",
        list: [
          "Công bố luật trước khi bắt đầu, gồm thời hạn và cách chọn người thắng.",
          "Bật Mỗi người một lượt để spam bình luận không có ích.",
          "Loại kênh của bạn, người kiểm duyệt và thành viên trong nhóm.",
          "Quay màn hình hoặc rút trực tiếp để khán giả thấy sự công bằng.",
          "Tuân thủ chính sách cuộc thi của YouTube và quy định pháp luật nơi bạn tổ chức.",
        ],
      },
      {
        heading: "Sự công bằng",
        paragraphs: ["Người thắng được rút từ các bình luận hợp lệ bằng thuật toán trộn một phần an toàn chuẩn mật mã, nên mỗi lượt hợp lệ có cơ hội như nhau và một người không thể thắng hai lần trong một lần rút."],
      },
    ],
    howTo: [
      { title: "Dán liên kết video", text: "Bất kỳ video công khai hoặc Shorts nào." },
      { title: "Tải bình luận", text: "Bình luận cấp một được tải tự động." },
      { title: "Đặt bộ lọc", text: "Từ khóa, loại trừ và mỗi người một lượt." },
      { title: "Chọn người thắng", text: "Rút một hoặc nhiều người cùng lúc." },
    ],
    benefits: [
      { title: "Rút công bằng", text: "Mọi lượt hợp lệ có cơ hội ngang nhau." },
      { title: "Chống spam", text: "Tùy chọn mỗi tài khoản một lượt." },
      { title: "Linh hoạt", text: "Lọc từ khóa và danh sách loại trừ." },
      { title: "Không cần đăng nhập", text: "Chúng tôi không bao giờ hỏi tài khoản YouTube của bạn." },
    ],
    faqs: [
      { q: "Có cần đăng nhập YouTube không?", a: "Không. Công cụ chỉ đọc bình luận công khai nên không cần đăng nhập." },
      { q: "Tải được bao nhiêu bình luận?", a: "Tối đa 4.000 bình luận cấp một mỗi video. Với minigame lớn hơn, hãy dán bình luận từ tệp xuất." },
      { q: "Có tính cả trả lời bình luận không?", a: "Chỉ bình luận cấp một được tải — đây là luật thường dùng cho minigame bình luận." },
      { q: "WhirlPick có liên kết với YouTube không?", a: "Không. WhirlPick là công cụ độc lập dùng YouTube Data API công khai. YouTube là thương hiệu của Google LLC." },
    ],
  },
};
