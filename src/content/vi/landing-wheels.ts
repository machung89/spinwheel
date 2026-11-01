import type { LandingText } from "../types";

export const landingWheels: Record<string, LandingText> = {
  "spin-the-wheel": {
    name: "Vòng quay may mắn",
    card: "Vòng quay ngẫu nhiên cho mọi danh sách.",
    seoTitle: "Vòng quay may mắn online – Quay ngẫu nhiên miễn phí",
    metaDescription: "Vòng quay may mắn online miễn phí. Nhập lựa chọn, bấm quay và nhận kết quả ngẫu nhiên công bằng trong vài giây. Tùy chỉnh màu, âm thanh, trọng số.",
    h1: "Vòng quay may mắn online",
    lead: "Nhập các lựa chọn, quay một vòng và để may mắn quyết định. Miễn phí, công bằng và chạy ngay trên trình duyệt.",
    presetTitle: "Cuối tuần làm gì?",
    presetEntries: ["Cày phim", "Chơi board game", "Đi picnic", "Làm bánh", "Đạp xe", "Hát karaoke", "Thử quán mới", "Đi bảo tàng"],
    sections: [
      {
        heading: "Vòng quay dùng được cho mọi thứ",
        paragraphs: [
          "Có những lựa chọn chẳng đáng để tranh luận lâu. Ăn ở đâu, ai đi trước, hôm nay làm việc nhà nào — một lượt quay là xong mà còn vui. Vòng quay nhận bất kỳ danh sách nào bạn đưa vào, từ hai lựa chọn đến một nghìn, và biến nó thành vòng quay đầy màu sắc dùng được trên máy tính, máy tính bảng hay điện thoại.",
          "Mọi thay đổi được tự động lưu trong trình duyệt, nên ngày mai quay lại vòng quay vẫn còn đó. Bạn không cần tài khoản và các mục không bao giờ được tải lên máy chủ của chúng tôi.",
        ],
      },
      {
        heading: "Kết quả được quyết định như thế nào",
        paragraphs: [
          "Khi bạn bấm Quay, kết quả được chọn trước bằng bộ sinh số ngẫu nhiên mật mã học của trình duyệt (chính là Web Crypto API dùng cho bảo mật). Sau đó vòng quay chạy hiệu ứng để ô được chọn dừng đúng dưới kim chỉ. Vì kết quả có trước khi hiệu ứng bắt đầu, tốc độ máy hay thời điểm bạn bấm đều không ảnh hưởng.",
          "Ở chế độ thường, mọi mục có cơ hội ngang nhau. Chuyển sang chế độ có trọng số nếu muốn một số lựa chọn dễ trúng hơn — các ô sẽ đổi kích thước để vòng quay luôn thể hiện đúng tỉ lệ.",
        ],
      },
      {
        heading: "Mọi người thường dùng để làm gì",
        list: [
          "Chọn quán ăn hay món gọi giao tận nơi khi cả nhóm không ai quyết",
          "Chọn trò chơi, hoạt động hoặc phim cho buổi tối gia đình",
          "Phân công việc nhà công bằng cho bạn cùng phòng hoặc các con",
          "Quay thưởng, minigame nhanh trên livestream",
          "Phân xử một cuộc tranh luận vui",
        ],
      },
    ],
    howTo: [
      { title: "Thêm lựa chọn", text: "Gõ từng lựa chọn rồi nhấn Enter, hoặc dán cả danh sách." },
      { title: "Tùy biến", text: "Chọn bảng màu, kim chỉ, phông chữ và âm thanh ở thẻ Giao diện." },
      { title: "Quay", text: "Bấm vào vòng quay, nút Quay hoặc phím Space." },
      { title: "Dùng kết quả", text: "Loại mục trúng, quay lại, hoặc sao chép và chia sẻ kết quả." },
    ],
    benefits: [
      { title: "Công bằng từ thiết kế", text: "Kết quả dùng ngẫu nhiên chuẩn mật mã, quyết định trước khi vòng quay chuyển động." },
      { title: "Riêng tư", text: "Danh sách chỉ nằm trong trình duyệt. Không cần đăng ký." },
      { title: "Linh hoạt", text: "Có sẵn chế độ trọng số, loại trừ, đếm điểm và bí ẩn." },
      { title: "Dễ chia sẻ", text: "Gửi liên kết là ai cũng mở được bản sao vòng quay của bạn." },
    ],
    faqs: [
      { q: "Vòng quay này có thật sự ngẫu nhiên không?", a: "Có. Mỗi lượt quay dùng crypto.getRandomValues với kỹ thuật lấy mẫu loại bỏ, nên mỗi mục có đúng xác suất được hiển thị. Hiệu ứng được tính sau đó để dừng ở ô đã chọn." },
      { q: "Tôi thêm được bao nhiêu lựa chọn?", a: "Tối đa 1.000 mục mỗi vòng quay. Với danh sách rất dài chữ sẽ nhỏ lại, nhưng kết quả vẫn chính xác và luôn hiện trong cửa sổ kết quả." },
      { q: "Tôi có lưu vòng quay được không?", a: "Vòng quay được lưu tự động trong trình duyệt này. Để chuyển sang thiết bị khác, hãy dùng Chia sẻ để tạo liên kết hoặc tải cấu hình dạng JSON." },
      { q: "Có dùng được trên điện thoại không?", a: "Có. Vòng quay tự co giãn theo màn hình, danh sách và cài đặt nằm ngay bên dưới." },
    ],
  },
  "wheel-of-names": {
    name: "Vòng quay tên",
    card: "Dán danh sách tên và chọn ngẫu nhiên một người.",
    seoTitle: "Vòng quay tên – Quay random tên ngẫu nhiên miễn phí",
    metaDescription: "Quay random tên chỉ với một lượt. Dán danh sách lớp hoặc danh sách thành viên, quay vòng quay tên và loại người đã trúng. Miễn phí, riêng tư, không cần đăng ký.",
    h1: "Vòng quay tên – Chọn tên ngẫu nhiên",
    lead: "Dán danh sách tên, quay và có ngay một lựa chọn công bằng. Hoàn hảo cho lớp học, cuộc họp và minigame.",
    presetTitle: "Chọn tên ngẫu nhiên",
    presetEntries: ["Minh Anh", "Gia Bảo", "Ngọc Hân", "Đức Huy", "Khánh Linh", "Quốc Bảo", "Thu Trang", "Hoàng Nam", "Bảo Ngọc", "Tuấn Kiệt", "Phương Vy", "Thành Đạt"],
    sections: [
      {
        heading: "Vì sao vòng quay tên lại hiệu quả",
        paragraphs: [
          "Gọi tên trực tiếp đôi khi tạo cảm giác bị “nhắm tới” — luôn có người thắc mắc vì sao lại là mình. Vòng quay giúp gỡ áp lực đó. Ai cũng thấy danh sách, ai cũng xem vòng quay, và không ai có thể nói giáo viên, người dẫn chương trình hay trưởng nhóm thiên vị.",
          "Vòng quay còn tạo chút hồi hộp. Học sinh ngồi thẳng lưng, người họp ngẩng lên khỏi laptop, còn khán giả livestream bắt đầu đoán xem ai sẽ trúng.",
        ],
      },
      {
        heading: "Đảm bảo ai cũng có lượt",
        paragraphs: [
          "Bật chế độ Loại trừ ở thẻ Quay và mỗi tên sẽ bị loại sau khi trúng. Cứ quay đến khi vòng trống là bạn đã gọi mỗi người đúng một lần theo thứ tự ngẫu nhiên. Xong thì nhấn Khôi phục tất cả để đưa mọi người trở lại.",
          "Muốn giữ tên trên vòng quay? Chế độ Đếm điểm sẽ đếm số lần mỗi người được chọn, rất tiện để nhận ra ai chưa có lượt.",
        ],
      },
      {
        heading: "Mẹo cho giáo viên và người dẫn",
        list: [
          "Dán tên trực tiếp từ một cột Google Sheets hoặc Excel — mỗi dòng một tên.",
          "Tạo mỗi lớp một vòng quay riêng (tối đa tám) để không lẫn danh sách.",
          "Gắn câu hỏi cho từng tên bằng Nội dung ẩn để có ngay câu hỏi kiểm tra bài.",
          "Dùng chế độ toàn màn hình trên máy chiếu cho giao diện sạch, không quảng cáo.",
          "Bật “Đọc to kết quả” để cả lớp cùng nghe tên người trúng.",
        ],
      },
    ],
    howTo: [
      { title: "Dán danh sách tên", text: "Dùng Dán nhiều hoặc Nhập tệp để thêm cả danh sách từ bảng tính." },
      { title: "Chọn chế độ", text: "Thường giữ tên trên vòng quay; Loại trừ sẽ loại người đã trúng." },
      { title: "Quay", text: "Nhấn Quay hoặc phím Space. Người trúng được công bố cùng pháo giấy." },
      { title: "Lặp lại", text: "Loại hoặc giữ người trúng rồi quay tiếp. Lịch sử ghi lại mọi lượt." },
    ],
    benefits: [
      { title: "Công bằng rõ ràng", text: "Ai cũng thấy cùng một danh sách và cùng một lượt quay — không thiên vị." },
      { title: "Chuẩn bị nhanh", text: "Dán 40 cái tên trong hai giây. Danh sách được lưu cho lần sau." },
      { title: "Sẵn sàng cho lớp học", text: "Có sẵn loại trừ, đếm điểm và câu hỏi ẩn." },
      { title: "Riêng tư", text: "Tên học sinh không rời khỏi thiết bị trừ khi bạn chủ động chia sẻ." },
    ],
    faqs: [
      { q: "Làm sao loại một tên sau khi đã trúng?", a: "Nhấn Loại bỏ trong cửa sổ kết quả, hoặc chuyển sang chế độ Loại trừ để tự động loại mọi người trúng. Tên đã loại vẫn hiện mờ trong danh sách để bạn khôi phục sau." },
      { q: "Có nhập tên từ Excel hay Google Sheets được không?", a: "Được. Sao chép cột và dùng Dán nhiều, hoặc nhập tệp .csv/.xlsx. Cột đầu tiên là tên; các cột thêm có thể đặt trọng số, màu hoặc câu hỏi ẩn." },
      { q: "Vòng quay tên có công bằng không?", a: "Ở chế độ thường, mọi tên có cơ hội như nhau. Người trúng được chọn bằng bộ sinh số ngẫu nhiên mật mã học của trình duyệt trước khi vòng quay bắt đầu." },
      { q: "Tên học sinh có bị lưu ở đâu không?", a: "Chỉ trong bộ nhớ cục bộ của trình duyệt bạn đang dùng. Chúng tôi không có tài khoản hay cơ sở dữ liệu, và liên kết chia sẻ chỉ được tạo khi bạn nhấn Chia sẻ." },
      { q: "Thêm được bao nhiêu tên?", a: "Tối đa 1.000 tên mỗi vòng quay, và mở cùng lúc tối đa tám vòng quay." },
    ],
  },
  "random-picker": {
    name: "Chọn ngẫu nhiên",
    card: "Chọn ngẫu nhiên một mục từ bất kỳ danh sách nào.",
    seoTitle: "Chọn ngẫu nhiên – Công cụ random từ danh sách bất kỳ",
    metaDescription: "Chọn ngẫu nhiên từ danh sách mọi kích thước. Dán lựa chọn, quay và nhận kết quả không thiên vị. Loại dần mục đã chọn, đặt trọng số hoặc dùng nhiều danh sách.",
    h1: "Công cụ chọn ngẫu nhiên",
    lead: "Có một danh sách và cần chọn ra một mục? Dán vào đây và để công cụ chọn — công bằng, tức thì và không thiên vị.",
    presetTitle: "Chọn việc nhà",
    presetEntries: ["Rửa bát", "Giặt đồ", "Hút bụi", "Đổ rác", "Lau bụi", "Đi chợ", "Tưới cây", "Dọn nhà tắm"],
    sections: [
      {
        heading: "Một công cụ, vô số danh sách",
        paragraphs: [
          "Công cụ chọn ngẫu nhiên là cách ra quyết định đơn giản nhất: bạn đưa ra lựa chọn, công cụ chọn một. Dùng để chia việc nhà, xếp thứ tự, chọn cuốn sách đọc tiếp, lỗi cần sửa trước hay ai được chọn nhạc. Bất cứ thứ gì viết thành danh sách đều chọn được.",
          "Vì được xây trên một vòng quay, bạn còn thấy rõ mọi lựa chọn và khả năng trúng của chúng — dễ giải thích kết quả cho người đang xem.",
        ],
      },
      {
        heading: "Chọn nhiều hơn một mục",
        paragraphs: [
          "Để rút nhiều mục không trùng, bật chế độ Loại trừ và quay bao nhiêu lần tùy ý — mỗi mục đã chọn sẽ bị loại nên không thể trúng lại. Kết quả nằm ở thẻ Lịch sử, nơi bạn có thể sao chép hoặc xuất ra tệp CSV.",
          "Cần chọn từ nhiều danh sách khác nhau cùng lúc, như người, việc và hạn chót? Thêm vòng quay (tối đa tám) và nhấn Quay cả. Mỗi vòng quay chạy độc lập và hiện kết quả riêng.",
        ],
      },
      {
        heading: "Ý tưởng sử dụng",
        list: ["Xoay vòng việc nhà hằng tuần cho bạn cùng phòng hoặc các con", "Thứ tự thuyết trình hoặc phát biểu", "Cuốn sách, podcast hay game nên bắt đầu tiếp theo", "Thứ tự chọn người trong giải đấu", "Chủ đề trọng tâm ngẫu nhiên cho buổi họp nhóm"],
      },
    ],
    howTo: [
      { title: "Dán danh sách", text: "Mỗi dòng một mục, hoặc nhập tệp CSV/Excel." },
      { title: "Đặt luật", text: "Chọn cơ hội ngang nhau, có trọng số hoặc loại trừ." },
      { title: "Chọn", text: "Quay để nhận mục ngẫu nhiên." },
      { title: "Xuất kết quả", text: "Sao chép kết quả hoặc tải toàn bộ lịch sử dạng CSV." },
    ],
    benefits: [
      { title: "Không thiên vị", text: "Lấy mẫu loại bỏ xóa bỏ độ lệch nhỏ mà code ngẫu nhiên đơn giản thường mắc." },
      { title: "Chọn nhiều mục", text: "Chế độ loại trừ rút các mục không trùng." },
      { title: "Nhiều danh sách", text: "Quay tối đa tám vòng cùng lúc với Quay cả." },
      { title: "Xuất được", text: "Tải mọi kết quả kèm thời gian để lưu lại." },
    ],
    faqs: [
      { q: "Có chọn nhiều mục một lúc được không?", a: "Dùng chế độ Loại trừ và quay mỗi lần một mục, hoặc dùng nhiều vòng quay với Quay cả. Nếu muốn chia nhóm người, công cụ Chia đội ngẫu nhiên chia cả danh sách chỉ với một cú bấm." },
      { q: "Có thể cho một số mục dễ trúng hơn không?", a: "Có. Ở chế độ Có trọng số, mỗi mục có một trọng số. Mục trọng số 2 dễ trúng gấp đôi mục trọng số 1, và ô của nó cũng to gấp đôi." },
      { q: "Danh sách có giới hạn không?", a: "Mỗi vòng quay chứa tối đa 1.000 mục. Việc chọn vẫn nhanh và chính xác ở kích thước đó." },
      { q: "Dùng ngoại tuyến được không?", a: "Sau khi trang đã tải, việc quay vẫn hoạt động khi mất mạng. Danh sách được giữ trong bộ nhớ trình duyệt." },
    ],
  },
  "decision-wheel": {
    name: "Vòng quay quyết định",
    card: "Phân xử nhanh giữa các lựa chọn.",
    seoTitle: "Vòng quay quyết định – Quay để chọn nhanh",
    metaDescription: "Phân vân không biết chọn gì? Quay vòng quay quyết định. Thêm các lựa chọn, tăng trọng số cho cái bạn thích và để vòng quay phân xử. Miễn phí, không cần đăng ký.",
    h1: "Vòng quay quyết định",
    lead: "Đang kẹt giữa nhiều lựa chọn? Đưa chúng lên vòng quay và quay. Đôi khi cách nhanh nhất để biết mình muốn gì là xem vòng quay chọn gì.",
    presetTitle: "Có nên…",
    presetEntries: ["Làm luôn", "Để mai tính", "Hỏi bạn bè", "Làm ngay hôm nay", "Đợi một tuần", "Viết ra ưu nhược điểm"],
    sections: [
      {
        heading: "Vì sao quay lại giúp ra quyết định",
        paragraphs: [
          "Mệt mỏi vì phải quyết định là có thật. Sau một ngày dài, ngay cả lựa chọn nhỏ — nấu món gì, làm việc nào trước, có ra ngoài không — cũng thấy nặng nề. Giao những quyết định nhỏ cho vòng quay giúp bạn để dành năng lượng cho việc quan trọng hơn.",
          "Còn một lợi ích nữa: khoảnh khắc vòng quay dừng lại, bạn sẽ thấy thoáng nhẹ nhõm hoặc thất vọng. Phản ứng đó cho biết bạn thật sự mong điều gì. Cứ quay lại nếu cần, chẳng ai tính điểm cả.",
        ],
      },
      {
        heading: "Nghiêng tỉ lệ về phía bạn thích",
        paragraphs: [
          "Không phải lựa chọn nào cũng ngang nhau. Ở chế độ Có trọng số, bạn có thể cho lựa chọn yêu thích trọng số 3 và lựa chọn ít khả năng trọng số 1. Các ô đổi kích thước theo đúng xác suất, nên bạn luôn biết quyết định được đưa ra thế nào.",
        ],
      },
      {
        heading: "Những quyết định hợp với vòng quay",
        list: ["Tối nay nấu món gì", "Làm việc nào trước", "Cuối tuần đi chơi đâu", "Hôm nay tập bài gì", "Mang board game nào tới buổi chơi"],
      },
    ],
    howTo: [
      { title: "Liệt kê lựa chọn", text: "Thêm mọi phương án bạn đang cân nhắc." },
      { title: "Đặt trọng số (tùy chọn)", text: "Chuyển sang chế độ Có trọng số và cho lựa chọn yêu thích số cao hơn." },
      { title: "Quay", text: "Để vòng quay quyết định." },
      { title: "Tin trực giác", text: "Hài lòng thì làm. Không hài lòng? Điều đó cũng nói lên nhiều điều." },
    ],
    benefits: [
      { title: "Hết nghĩ ngợi", text: "Biến một quyết định bế tắc thành lượt quay 5 giây." },
      { title: "Tỉ lệ minh bạch", text: "Kích thước ô luôn đúng bằng xác suất thật." },
      { title: "Dùng lại được", text: "Vòng quay quyết định được lưu cho lần sau." },
      { title: "Vui khi đi nhóm", text: "Phân xử tranh luận mà không ai thấy bị lấn át." },
    ],
    faqs: [
      { q: "Có nên để vòng quay ra quyết định thật không?", a: "Với lựa chọn nhỏ thì hoàn toàn nên — vừa nhanh vừa đỡ căng thẳng. Với quyết định lớn, hãy dùng nó như công cụ để nghe trực giác chứ đừng coi là lời phán cuối cùng." },
      { q: "Quyết định có trọng số hoạt động thế nào?", a: "Cơ hội của mỗi lựa chọn bằng trọng số của nó chia cho tổng trọng số. Lựa chọn có trọng số 3 trong vòng quay tổng 6 có 50% khả năng trúng." },
      { q: "Có thể giấu các lựa chọn đến khi dừng không?", a: "Có. Chế độ Bí ẩn giấu tên các ô cho đến khi vòng quay dừng, tạo thêm hồi hộp khi chơi nhóm." },
      { q: "Có phiên bản có/không đơn giản không?", a: "Có — hãy thử Vòng quay có hay không hoặc công cụ Có hay không tức thì." },
    ],
  },
  "yes-or-no-wheel": {
    name: "Vòng quay có hay không",
    card: "Câu trả lời 50/50 cho mọi câu hỏi có/không.",
    seoTitle: "Vòng quay có hay không – Quay để có câu trả lời",
    metaDescription: "Đặt câu hỏi và quay vòng quay có hay không để nhận câu trả lời ngẫu nhiên tức thì. Thêm “Có thể”, đổi tỉ lệ hoặc chơi thắng 2/3. Miễn phí và vui.",
    h1: "Vòng quay có hay không",
    lead: "Đặt câu hỏi, quay vòng quay và nhận câu trả lời thẳng thắn. Thêm “Có thể” nếu bạn đang lưỡng lự.",
    presetTitle: "Có hay không?",
    presetEntries: ["Có", "Không", "Có", "Không", "Có", "Không"],
    sections: [
      {
        heading: "Tung đồng xu nhưng thú vị hơn",
        paragraphs: [
          "Vòng quay có hay không làm đúng việc của đồng xu, nhưng dễ nhìn hơn, xem vui hơn và dễ tùy biến. Vòng quay có sẵn ba ô Có và ba ô Không, nên hai câu trả lời có cơ hội đúng 50%.",
          "Muốn thêm lựa chọn thứ ba? Thêm ô “Có thể” — hoặc đổi tên các ô thành “Làm” và “Bỏ qua”, “Bây giờ” và “Để sau”, hay bất cứ gì hợp với câu hỏi.",
        ],
      },
      {
        heading: "Thay đổi tỉ lệ",
        paragraphs: ["Nếu bạn đang nghiêng về một phía, hãy thêm một ô Có hoặc chuyển sang chế độ Có trọng số và đặt Có là 2. Vòng quay hiển thị rõ tỉ lệ mới, nên vẫn là câu trả lời trung thực — chỉ là có thêm chút mong muốn của bạn."],
      },
      {
        heading: "Câu hỏi vui để thử",
        list: ["Tối nay có đặt pizza không?", "Mình có nên nhắn tin trước không?", "Tối nay có xem phim không?", "Cuối tuần có đi biển không?", "Mình có được ăn tráng miệng không?"],
      },
    ],
    howTo: [
      { title: "Nghĩ một câu hỏi", text: "Câu hỏi nào trả lời được bằng có/không đều được." },
      { title: "Quay", text: "Nhấn Quay hoặc phím Space." },
      { title: "Đọc câu trả lời", text: "Ô trúng được làm nổi bật và thông báo." },
      { title: "Thắng 2/3?", text: "Quay tiếp và tính điểm bằng chế độ Đếm điểm." },
    ],
    benefits: [
      { title: "Đúng 50/50", text: "Ô bằng nhau nghĩa là cơ hội bằng nhau, trừ khi bạn thay đổi." },
      { title: "Tùy biến", text: "Thêm “Có thể”, đổi tên câu trả lời, đổi màu." },
      { title: "Chế độ đếm điểm", text: "Đếm câu trả lời qua nhiều lượt cho kiểu thắng 2/3." },
      { title: "Dùng ở đâu cũng được", text: "Điện thoại, máy tính bảng hay laptop — không cần ứng dụng." },
    ],
    faqs: [
      { q: "Vòng quay có hay không có đúng 50/50 không?", a: "Có. Vòng quay mặc định có ba ô Có và ba ô Không bằng nhau, nên mỗi câu trả lời có đúng 50% cơ hội." },
      { q: "Thêm “Có thể” được không?", a: "Gõ “Có thể” vào ô nhập rồi nhấn Enter. Với hai Có, hai Không và hai Có thể, mỗi câu trả lời có cơ hội một phần ba." },
      { q: "Khác gì với công cụ Có hay không?", a: "Vòng quay trực quan và tùy biến được. Công cụ Có hay không cho câu trả lời tức thì không cần hiệu ứng, kèm tùy chọn thắng 2/3." },
    ],
  },
  "prize-wheel": {
    name: "Vòng quay giải thưởng",
    card: "Vòng quay có trọng số cho sự kiện và cửa hàng.",
    seoTitle: "Vòng quay giải thưởng – Vòng quay trúng thưởng online",
    metaDescription: "Tạo vòng quay trúng thưởng cho minigame, hội chợ, cửa hàng và lớp học. Đặt tỉ lệ giải bằng trọng số, thêm hình ảnh và quay toàn màn hình. Miễn phí.",
    h1: "Vòng quay giải thưởng",
    lead: "Dựng vòng quay trúng thưởng cho gian hàng, cửa hàng, livestream hay lớp học chỉ trong vài phút. Đặt tỉ lệ, thêm hình ảnh và quay.",
    presetTitle: "Vòng quay trúng thưởng",
    presetEntries: ["Ly cà phê miễn phí", "Giảm 10%", "Bộ sticker", "Chúc may mắn lần sau", "Miễn phí vận chuyển", "Quà bí mật", "Voucher 50K", "Giải đặc biệt"],
    sections: [
      {
        heading: "Đặt tỉ lệ giải hợp lý",
        paragraphs: [
          "Lỗi phổ biến nhất của vòng quay giải thưởng là cho giải đặc biệt ô to bằng ô sticker. Vòng quay này bắt đầu ở chế độ Có trọng số: giải phổ thông có trọng số lớn, giải cao cấp có trọng số nhỏ. Mỗi ô đổi kích thước theo tỉ lệ, nên người chơi thấy rõ cơ hội là thật.",
          "Muốn giới hạn số giải lớn? Dùng chế độ Loại trừ hoặc loại giải khỏi vòng quay sau khi đã có người trúng.",
        ],
      },
      {
        heading: "Tổ chức vòng quay tại sự kiện",
        paragraphs: [
          "Mở vòng quay ở chế độ toàn màn hình trên laptop nối với TV hoặc màn hình lớn, dùng phím Space hoặc bút trình chiếu để quay. Chế độ toàn màn hình chỉ hiển thị vòng quay và kết quả — không menu, không quảng cáo. Bật âm thanh để tiếng tích tắc và tiếng chúc mừng làm gian hàng thêm sôi động.",
          "Trước sự kiện, hãy kiểm tra quy định nơi bạn tổ chức. Chương trình khuyến mại có thưởng hoặc yêu cầu mua hàng để tham gia có thể phải đăng ký với cơ quan chức năng; vòng quay miễn phí thường đơn giản hơn, nhưng quy định mỗi nơi mỗi khác.",
        ],
      },
      {
        heading: "Vòng quay giải thưởng phù hợp ở đâu",
        list: ["Gian hàng hội chợ, triển lãm", "Khai trương và tri ân khách hàng", "Hệ thống khen thưởng trong lớp học", "Minigame trên livestream và mạng xã hội", "Tiệc công ty và sự kiện nội bộ"],
      },
    ],
    howTo: [
      { title: "Liệt kê giải thưởng", text: "Thêm từng giải, kèm emoji hoặc hình ảnh nếu muốn." },
      { title: "Đặt tỉ lệ", text: "Ở chế độ Có trọng số, cho giải hiếm trọng số nhỏ hơn." },
      { title: "Bật toàn màn hình", text: "Chiếu vòng quay lên màn hình lớn cho khán giả." },
      { title: "Ghi nhận người trúng", text: "Lịch sử ghi lại từng giải kèm thời gian." },
    ],
    benefits: [
      { title: "Tỉ lệ minh bạch", text: "Kích thước ô luôn thể hiện đúng cơ hội trúng." },
      { title: "Sẵn sàng cho sự kiện", text: "Toàn màn hình, âm thanh, pháo giấy và điều khiển bằng phím." },
      { title: "Quản lý số lượng", text: "Loại giải khi đã hết quà." },
      { title: "Lưu hồ sơ", text: "Xuất CSV mọi lượt quay để đối soát." },
    ],
    faqs: [
      { q: "Làm sao cho giải đặc biệt hiếm hơn?", a: "Giữ chế độ Có trọng số và cho giải đặc biệt trọng số nhỏ, ví dụ 0,5, còn giải phổ thông 3 trở lên. Xác suất của từng giải hiện trong cửa sổ kết quả." },
      { q: "Có thêm hình ảnh vào vòng quay được không?", a: "Được. Mở tùy chọn của một mục và tải ảnh PNG, JPG hoặc WebP (tối đa 2 MB), hoặc dán đường dẫn ảnh https." },
      { q: "Dùng ở hội chợ không có mạng được không?", a: "Hãy mở trang một lần khi còn mạng; việc quay vẫn hoạt động nếu mất kết nối. Vòng quay được lưu trong trình duyệt." },
      { q: "Tổ chức vòng quay trúng thưởng có hợp pháp không?", a: "Vòng quay miễn phí tham gia thường không vấn đề, nhưng quy định về khuyến mại có thưởng khác nhau tùy quốc gia. Nếu người chơi phải trả tiền hoặc mua hàng để quay, hãy kiểm tra quy định địa phương trước." },
    ],
  },
  "classroom-spinner": {
    name: "Vòng quay lớp học",
    card: "Phân công trực nhật, hoạt động và phần thưởng.",
    seoTitle: "Vòng quay lớp học – Vòng quay miễn phí cho giáo viên",
    metaDescription: "Vòng quay lớp học miễn phí để gọi học sinh, phân công trực nhật, chọn hoạt động và tổ chức trò chơi ôn bài. Dùng tốt trên máy chiếu và riêng tư.",
    h1: "Vòng quay cho lớp học",
    lead: "Phân công trực nhật, chọn hoạt động và tổ chức trò chơi ôn bài với vòng quay mà học sinh nào cũng muốn xem.",
    presetTitle: "Phân công trực nhật",
    presetEntries: ["Lớp trưởng xếp hàng", "Giữ cửa", "Phát bài", "Lau bảng", "Tưới cây", "Thủ thư lớp", "Liên lạc", "Hỗ trợ máy chiếu", "Quản lý đồ dùng", "Ghi lịch"],
    sections: [
      {
        heading: "Hơn cả một vòng quay tên",
        paragraphs: [
          "Giáo viên dùng vòng quay cho nhiều việc hơn là gọi tên. Vòng quay này bắt đầu với các nhiệm vụ trực nhật quen thuộc, nhưng bạn có thể đổi ngay sang chủ đề ôn tập, hoạt động thư giãn, câu hỏi đọc hiểu, ghép cặp hay phần thưởng.",
          "Mở tối đa tám vòng quay để kết hợp — ví dụ một vòng tên học sinh và một vòng câu hỏi thảo luận. Nhấn Quay cả là cả hai cùng chọn.",
        ],
      },
      {
        heading: "Thiết kế cho bục giảng",
        paragraphs: [
          "Chế độ toàn màn hình cho vòng quay gọn gàng không menu, không quảng cáo, lý tưởng cho máy chiếu và bảng tương tác. Học sinh có thể tự bấm nút Quay to ở giữa, và phím Space cũng dùng được nếu bạn có bàn phím không dây.",
          "Bật “Đọc to kết quả” để nghe kết quả, và dùng Nội dung ẩn để gắn câu hỏi hoặc nhiệm vụ cho từng ô — chỉ hiện ra sau khi quay.",
        ],
      },
      {
        heading: "Ý tưởng cho lớp học",
        list: ["Phân công trực nhật hằng tuần", "Chọn câu hỏi hoặc chủ đề ôn tập tiếp theo", "Chọn trò thư giãn khi lớp uể oải", "Chọn câu hỏi viết nhật ký đọc sách", "Khen thưởng bằng vòng quay phần thưởng", "Ghép cặp hoặc chia nhóm ngẫu nhiên (thử Chia đội ngẫu nhiên)"],
      },
    ],
    howTo: [
      { title: "Chọn danh sách ban đầu", text: "Dùng các nhiệm vụ có sẵn hoặc mở một mẫu lớp học." },
      { title: "Cá nhân hóa", text: "Đổi tên ô, chọn màu của lớp và thêm emoji." },
      { title: "Chiếu lên", text: "Bấm nút toàn màn hình cho giao diện tập trung." },
      { title: "Để học sinh quay", text: "Bấm, chạm hoặc nhấn Space — kết quả ghi trong Lịch sử." },
    ],
    benefits: [
      { title: "An toàn cho học sinh", text: "Không tài khoản, tên chỉ nằm trên máy của bạn." },
      { title: "Hấp dẫn", text: "Âm thanh, pháo giấy và sự hồi hộp giữ học sinh tập trung." },
      { title: "Linh hoạt", text: "Trực nhật, câu hỏi, phần thưởng hay chia nhóm — một công cụ là đủ." },
      { title: "Công bằng", text: "Chế độ Loại trừ đảm bảo em nào cũng có lượt." },
    ],
    faqs: [
      { q: "Vòng quay lớp học có an toàn cho học sinh không?", a: "Có. Không đăng ký, không chat và không có nội dung do người lạ tạo. Danh sách chỉ lưu trong trình duyệt của bạn." },
      { q: "Có dùng được trên bảng tương tác không?", a: "Được. Mở trang trên trình duyệt của bảng, bật toàn màn hình và chạm vào vòng quay để quay." },
      { q: "Có lưu riêng vòng quay cho từng lớp được không?", a: "Bạn có thể giữ tối đa tám vòng quay trên trang này, mỗi vòng tự lưu. Xuất JSON để sao lưu hoặc chuyển sang máy khác." },
      { q: "Có giấu câu hỏi đến lúc quay được không?", a: "Thêm câu hỏi hoặc nhiệm vụ vào Nội dung ẩn của từng mục. Nội dung chỉ hiện trong cửa sổ kết quả sau khi vòng quay dừng." },
    ],
  },
  "random-number-wheel": {
    name: "Vòng quay số ngẫu nhiên",
    card: "Quay một số từ 1 đến 10.",
    seoTitle: "Vòng quay số ngẫu nhiên – Quay để chọn số",
    metaDescription: "Quay vòng quay số ngẫu nhiên từ 1 đến 10, 1 đến 100 hoặc khoảng bất kỳ. Tiện cho bốc thăm, trò chơi toán và hoạt động lớp học. Miễn phí, công bằng.",
    h1: "Vòng quay số ngẫu nhiên",
    lead: "Quay để chọn một số. Bắt đầu với 1 đến 10, hoặc dán khoảng số bạn cần cho bốc thăm, trò chơi toán hay lô tô.",
    presetTitle: "Số 1–10",
    sections: [
      {
        heading: "Khoảng số nào cũng được",
        paragraphs: [
          "Vòng quay bắt đầu với các số từ 1 đến 10. Cần khoảng khác? Mở Dán nhiều và nhập mỗi dòng một số — cách nhanh là kéo một cột số trong Google Sheets hoặc Excel rồi dán vào. Vòng quay chứa được tới 1.000 số.",
          "Với khoảng rất lớn, như 1 đến 1.000.000, Tạo số ngẫu nhiên sẽ phù hợp hơn: chọn trong mọi khoảng ngay lập tức mà không cần một ô cho từng số.",
        ],
      },
      {
        heading: "Rút số không lặp lại",
        paragraphs: ["Với bốc thăm hay lô tô, hãy bật chế độ Loại trừ. Mỗi số bị loại sau khi đã ra nên không thể gọi hai lần. Các lượt rút được ghi theo thứ tự trong thẻ Lịch sử, và bạn có thể xuất ra tệp CSV."],
      },
      {
        heading: "Cách dùng vòng quay số",
        list: ["Bốc thăm số vé", "Luyện bảng cửu chương (quay hai vòng rồi nhân)", "Chọn số trang, số bài hoặc số chương", "Chọn số ghế hoặc số bàn ngẫu nhiên", "Trò chơi cần một con số ngẫu nhiên"],
      },
    ],
    howTo: [
      { title: "Đặt dãy số", text: "Giữ 1–10 hoặc dán khoảng của bạn." },
      { title: "Chọn có lặp hay không", text: "Thường cho phép lặp; Loại trừ rút mỗi số một lần." },
      { title: "Quay", text: "Kết quả hiện trong cửa sổ và trong Lịch sử." },
      { title: "Xuất", text: "Tải lịch sử rút số dạng CSV nếu cần lưu lại." },
    ],
    benefits: [
      { title: "Đồng đều", text: "Mọi số có cơ hội như nhau." },
      { title: "Không lặp lại", text: "Chế độ loại trừ cho bốc thăm và lô tô." },
      { title: "Trực quan", text: "Tuyệt vời cho lớp học và khán giả thích xem." },
      { title: "Toán học với nhiều vòng", text: "Quay hai vòng số cùng lúc cho trò chơi toán." },
    ],
    faqs: [
      { q: "Làm sao tạo vòng quay 1 đến 100?", a: "Mở mẫu Chọn số 1–100, hoặc dùng Dán nhiều với các số từ 1 đến 100, mỗi số một dòng." },
      { q: "Có chọn nhiều số được không?", a: "Quay nhiều lần với chế độ Loại trừ, hoặc dùng Tạo số ngẫu nhiên để rút nhiều số một lúc." },
      { q: "Các số có thật sự ngẫu nhiên không?", a: "Chúng đến từ bộ sinh số ngẫu nhiên mật mã học của trình duyệt, kèm lấy mẫu loại bỏ để tránh sai lệch." },
    ],
  },
  "random-letter-wheel": {
    name: "Vòng quay chữ cái",
    card: "Quay một chữ cái từ A đến Z.",
    seoTitle: "Vòng quay chữ cái – Quay chọn chữ cái A–Z ngẫu nhiên",
    metaDescription: "Quay vòng quay bảng chữ cái để chọn ngẫu nhiên một chữ từ A đến Z. Phù hợp cho trò chơi chữ, luyện phát âm, trò chơi theo chủ đề và khởi động trong lớp.",
    h1: "Vòng quay chữ cái (A–Z)",
    lead: "Quay bảng chữ cái để chọn ngẫu nhiên một chữ cho trò chơi chữ, luyện phát âm và thử thách theo chủ đề.",
    presetTitle: "Bảng chữ cái",
    sections: [
      {
        heading: "Hoàn hảo cho trò chơi chữ và chủ đề",
        paragraphs: [
          "Rất nhiều trò chơi kinh điển bắt đầu bằng một chữ cái ngẫu nhiên: kể tên con vật, thành phố và món ăn bắt đầu bằng chữ đó; viết một câu mà mọi từ đều bắt đầu bằng chữ đó; hoặc thi nhau liệt kê nhiều từ nhất trong một phút.",
          "Một số chữ (như F, J, W, Z — vốn ít gặp trong tiếng Việt) làm trò chơi rất khó. Bấm biểu tượng con mắt để ẩn chúng mà không cần xóa, rồi đưa lại bất cứ lúc nào bằng Khôi phục tất cả.",
        ],
      },
      {
        heading: "Phát âm và làm quen mặt chữ",
        paragraphs: ["Với các bé, hãy quay một chữ rồi hỏi cách đọc, một từ bắt đầu bằng chữ đó, hoặc tìm một đồ vật trong phòng có tên bắt đầu bằng chữ đó. Thêm emoji cho từng chữ để gợi ý bằng hình, hoặc thử mẫu Bảng chữ cái tiếng Anh có sẵn từ minh họa cho mỗi chữ."],
      },
      {
        heading: "Ý tưởng trò chơi nhanh",
        list: ["Đố chủ đề: kể một món ăn, địa danh và con vật bắt đầu bằng chữ cái", "Thi ghép từ: ai nghĩ ra từ dài nhất bắt đầu bằng chữ đó", "Thử thách điệp âm: đặt một câu thật vui", "Khởi động phát âm: đọc âm và một từ phù hợp", "Truy tìm đồ vật: tìm thứ gì đó trong phòng bắt đầu bằng chữ cái"],
      },
    ],
    howTo: [
      { title: "Bắt đầu với A–Z", text: "Cả 26 chữ cái đã nằm sẵn trên vòng quay." },
      { title: "Ẩn chữ khó", text: "Ẩn F, J, W hoặc Z bằng biểu tượng con mắt nếu muốn." },
      { title: "Quay", text: "Bấm, chạm hoặc nhấn Space." },
      { title: "Chơi", text: "Dùng chữ cái cho trò chơi chữ hoặc chủ đề." },
    ],
    benefits: [
      { title: "Hợp với lớp học", text: "Chữ to, rõ, dễ đọc trên máy chiếu." },
      { title: "Tùy biến", text: "Chữ thường, chỉ nguyên âm hoặc bất kỳ nhóm chữ nào." },
      { title: "Không lặp lại", text: "Chế độ loại trừ rút mỗi chữ một lần." },
      { title: "Tức thì", text: "Không cần chuẩn bị — bảng chữ cái đã sẵn sàng." },
    ],
    faqs: [
      { q: "Có dùng chữ thường được không?", a: "Được. Sửa các mục, hoặc dán a–z chữ thường bằng Dán nhiều và chọn Thay thế các mục hiện có." },
      { q: "Làm sao chỉ quay nguyên âm?", a: "Ẩn các phụ âm bằng biểu tượng con mắt, hoặc tạo vòng quay mới với A, E, I, O, U, Y (thêm Ă, Â, Ê, Ô, Ơ, Ư nếu học tiếng Việt)." },
      { q: "Có phiên bản không cần vòng quay không?", a: "Công cụ Tạo chữ cái ngẫu nhiên rút một hoặc nhiều chữ ngay lập tức, có tùy chọn nguyên âm, phụ âm và bỏ chữ khó." },
    ],
  },
  "truth-or-dare-wheel": {
    name: "Vòng quay thật hay thách",
    card: "Câu hỏi thật và thử thách ẩn, hé lộ sau mỗi lượt quay.",
    seoTitle: "Vòng quay thật hay thách – Truth or Dare online",
    metaDescription: "Quay vòng quay thật hay thách để mở câu hỏi hoặc thử thách được giấu kín. Có sẵn câu hỏi lành mạnh cho cả gia đình, hoặc tự viết cho tiệc tùng và ngủ chung.",
    h1: "Vòng quay thật hay thách",
    lead: "Quay để rơi vào Thật hoặc Thách — rồi mở câu hỏi hay thử thách đang được giấu dưới ô đó.",
    presetTitle: "Thật hay thách",
    presetEntries: [
      { text: "Thật", hidden: "Điều ngớ ngẩn nhất bạn từng làm ở trường là gì?" },
      { text: "Thách", hidden: "Nói giọng rô-bốt cho đến lượt tiếp theo." },
      { text: "Thật", hidden: "Nếu được tàng hình một ngày, việc đầu tiên bạn làm là gì?" },
      { text: "Thách", hidden: "Bắt chước con gà giống nhất có thể." },
      { text: "Thật", hidden: "Bài hát nào bạn hay hát khi không có ai nghe?" },
      { text: "Thách", hidden: "Chỉ nói bằng vần điệu trong một vòng." },
      { text: "Thật", hidden: "Nếu được làm người đặt luật, bạn sẽ đặt luật gì?" },
      { text: "Thách", hidden: "Đi kiểu con cua qua phòng." },
    ],
    sections: [
      {
        heading: "Câu hỏi ẩn tăng thêm phần hồi hộp",
        paragraphs: [
          "Mỗi ô trên vòng quay giấu một câu hỏi hoặc thử thách cụ thể. Người chơi chỉ thấy Thật hoặc Thách khi đang quay; nội dung thật chỉ hiện trong cửa sổ kết quả sau khi dừng. Không ai có thể nhắm vào ô dễ.",
          "Các câu mẫu đều lành mạnh, phù hợp cho trẻ em. Mở tùy chọn của mục bất kỳ để sửa nội dung ẩn, hoặc thêm ô mới với ý tưởng của bạn cho tuổi teen hay buổi chơi của người lớn.",
        ],
      },
      {
        heading: "Giữ cuộc chơi vui cho tất cả",
        list: [
          "Thống nhất luật “bỏ lượt” trước khi chơi — mỗi người được bỏ qua một lần.",
          "Thử thách phải an toàn, tử tế và làm được ngay trong phòng.",
          "Không thách ai chia sẻ thông tin riêng tư hay đăng lên mạng.",
          "Dùng chế độ Loại trừ để một câu không bị lặp lại.",
          "Muốn nhiều câu hỏi hơn theo độ tuổi, hãy thử công cụ Thật hay thách ngẫu nhiên.",
        ],
      },
      {
        heading: "Tạo phiên bản của riêng bạn",
        paragraphs: ["Đổi câu hỏi theo chủ đề: câu hỏi ngày Tết cho buổi họp mặt gia đình, câu hỏi gắn kết cho công ty, hay thử thách vận động vui cho tiệc sinh nhật. Sau đó dùng Chia sẻ để gửi vòng quay cho bạn bè — nội dung ẩn sẽ đi kèm."],
      },
    ],
    howTo: [
      { title: "Tập hợp người chơi", text: "Ngồi thành vòng tròn hoặc vào cuộc gọi video." },
      { title: "Quay", text: "Mỗi người quay đến lượt của mình." },
      { title: "Hé lộ", text: "Câu hỏi hay thử thách ẩn hiện ra sau khi vòng quay dừng." },
      { title: "Tùy biến", text: "Sửa nội dung ẩn cho hợp với nhóm của bạn." },
    ],
    benefits: [
      { title: "Không nhìn trộm", text: "Nội dung được giấu đến khi quay xong." },
      { title: "Khởi đầu lành mạnh", text: "Câu mẫu phù hợp cho trẻ em." },
      { title: "Sửa được hết", text: "Tự viết câu hỏi và thử thách." },
      { title: "Dễ chia sẻ", text: "Gửi vòng quay tự tạo cho bạn bè." },
    ],
    faqs: [
      { q: "Câu hỏi thật hay thách có phù hợp với trẻ em không?", a: "Các câu mẫu trên vòng quay này được viết cho trẻ em và gia đình. Bạn có thể sửa bất kỳ câu nào, và công cụ Thật hay thách ngẫu nhiên cho phép chọn câu hỏi cho trẻ em, tuổi teen hoặc người lớn." },
      { q: "Làm sao thêm thử thách của riêng tôi?", a: "Thêm một mục tên Thách, mở tùy chọn bằng nút mũi tên và gõ thử thách vào ô Nội dung ẩn." },
      { q: "Có chơi qua video call được không?", a: "Được. Chia sẻ màn hình và quay cho từng người, hoặc gửi liên kết chia sẻ để mọi người tự quay trên máy mình." },
    ],
  },
  "food-wheel": {
    name: "Vòng quay ăn gì",
    card: "Mười món quen thuộc để quay chọn.",
    seoTitle: "Vòng quay ăn gì – Hôm nay ăn gì? Quay là biết",
    metaDescription: "Không biết hôm nay ăn gì? Quay vòng quay món ăn cho bữa trưa, bữa tối hay đặt đồ ăn. Tùy chỉnh với món và quán quen của bạn. Miễn phí.",
    h1: "Vòng quay ăn gì – Hôm nay ăn gì?",
    lead: "Chấm dứt vòng lặp “ăn gì cũng được, còn bạn?”. Quay vòng quay là có món ngay.",
    presetTitle: "Hôm nay ăn gì?",
    presetEntries: ["Pizza", { text: "Bánh mì", emoji: "🥖" }, "Sushi", "Burger", "Mì Ý", { text: "Cơm rang", emoji: "🍚" }, "Thịt nướng", "Salad", "Cà ri", { text: "Phở", emoji: "🍜" }],
    sections: [
      {
        heading: "Cách nhanh nhất để chọn món",
        paragraphs: [
          "“Ăn gì bây giờ?” là cuộc tranh luận quen thuộc nhất trong mọi gia đình. Vòng quay ăn gì có sẵn mười món dễ ăn, hợp cả khi nấu ở nhà lẫn khi gọi đồ. Thay bằng món tủ của bạn, quán quen gần nhà hay những gì đang có trong tủ lạnh.",
          "Nếu ai đó thật sự không muốn ăn sushi hôm nay, bấm biểu tượng con mắt để tạm ẩn món đó mà không cần xóa.",
        ],
      },
      {
        heading: "Công bằng cho cả bàn",
        paragraphs: ["Cho mỗi người thêm một hai lựa chọn rồi quay. Vì kết quả ngẫu nhiên và ai cũng thấy, khó mà cãi lại. Muốn ưu tiên món của người có sinh nhật? Chuyển sang chế độ Có trọng số và tăng trọng số món đó."],
      },
      {
        heading: "Thêm vòng quay ẩm thực",
        list: ["Ý tưởng bữa trưa đi làm, đi học", "Chọn quán cho buổi hẹn hò", "Vòng quay tráng miệng", "Ý tưởng bữa tối nấu nhanh", "Ăn gì khi hết tiền cuối tháng"],
      },
    ],
    howTo: [
      { title: "Thêm món", text: "Giữ danh sách có sẵn hoặc thêm món yêu thích." },
      { title: "Bỏ món bị phản đối", text: "Ẩn những món mà ai đó không muốn ăn." },
      { title: "Quay", text: "Để vòng quay chọn bữa tối." },
      { title: "Thưởng thức", text: "Hết tranh luận — chỉ còn ăn thôi." },
    ],
    benefits: [
      { title: "Hết tranh cãi", text: "Một lượt quay công bằng mà cả nhóm đã đồng ý trước." },
      { title: "Cá nhân hóa", text: "Thêm món, quán quen và emoji của bạn." },
      { title: "Được lưu lại", text: "Vòng quay chờ sẵn lần sau bạn đói." },
      { title: "Cả nhà cùng vui", text: "Trẻ con rất thích được tự tay quay." },
    ],
    faqs: [
      { q: "Có thêm quán ăn yêu thích được không?", a: "Được. Gõ tên từng quán rồi nhấn Enter, hoặc bắt đầu từ mẫu Chọn quán ăn." },
      { q: "Làm sao để không ăn một món mỗi tối?", a: "Dùng chế độ Loại trừ suốt tuần: mỗi món sẽ bị loại sau khi được chọn. Nhấn Khôi phục tất cả khi muốn có lại toàn bộ danh sách." },
      { q: "Có lưu nhiều vòng quay ăn uống được không?", a: "Được. Thêm tối đa tám vòng quay tại đây — ví dụ một vòng bữa tối và một vòng tráng miệng." },
    ],
  },
  "movie-wheel": {
    name: "Vòng quay chọn phim",
    card: "Chọn thể loại cho buổi tối xem phim.",
    seoTitle: "Vòng quay chọn phim – Hôm nay xem phim gì?",
    metaDescription: "Quay vòng quay chọn phim để chọn thể loại hoặc một phim trong danh sách muốn xem. Hoàn hảo cho buổi tối xem phim cùng bạn bè, gia đình hay người yêu. Miễn phí.",
    h1: "Vòng quay chọn phim",
    lead: "Lướt 40 phút rồi chẳng xem gì? Quay vòng quay để chọn thể loại — hoặc nạp danh sách phim muốn xem của bạn.",
    presetTitle: "Thể loại phim tối nay",
    presetEntries: ["Hành động", "Hài", "Kinh dị", "Lãng mạn hài", "Khoa học viễn tưởng", "Hoạt hình", "Tài liệu", "Giật gân", "Giả tưởng", "Phim kinh điển"],
    sections: [
      {
        heading: "Hết bối rối mỗi tối xem phim",
        paragraphs: [
          "Với hàng nghìn phim trên các nền tảng, chọn phim có khi còn lâu hơn xem phim. Thu hẹp lựa chọn bằng một lượt quay: chọn thể loại trước rồi chọn phim trong thể loại đó. Hoặc dán cả danh sách phim muốn xem lên vòng quay và để nó chọn thẳng.",
          "Thử dùng hai vòng quay cùng lúc — một vòng thể loại và một vòng thập niên — rồi nhấn Quay cả xem ra tổ hợp gì.",
        ],
      },
      {
        heading: "Danh sách phim chung",
        paragraphs: ["Các cặp đôi và nhóm bạn có thể mỗi người thêm vài phim vào một vòng quay, rồi chia sẻ liên kết để ai cũng có cùng danh sách. Bật chế độ Loại trừ để xem hết danh sách qua nhiều buổi tối mà không bị trùng."],
      },
      {
        heading: "Ý tưởng quay phim",
        list: ["Chọn thể loại trước, phim sau", "Quay danh sách phim cho cặp đôi", "Vòng quay thập niên: 80, 90, 2000, 2010", "Buổi tối hoạt hình cho các bé", "Thứ tự xem phim mùa lễ hội"],
      },
    ],
    howTo: [
      { title: "Chọn thể loại hoặc phim", text: "Giữ danh sách thể loại hoặc dán danh sách phim của bạn." },
      { title: "Thêm vòng quay thứ hai", text: "Tùy chọn: thêm thập niên, đồ ăn vặt hay ai chọn lần sau." },
      { title: "Quay", text: "Để vòng quay quyết định tối nay xem gì." },
      { title: "Bấm phát", text: "Không còn lướt mãi." },
    ],
    benefits: [
      { title: "Tiết kiệm thời gian", text: "Quyết định trong vài giây thay vì lướt cả tiếng." },
      { title: "Ai cũng góp ý", text: "Mỗi người thêm phim vào vòng quay chung." },
      { title: "Kết hợp vòng quay", text: "Thể loại, thập niên và đồ ăn vặt quay cùng lúc." },
      { title: "Ghi nhớ", text: "Danh sách phim được lưu trong trình duyệt." },
    ],
    faqs: [
      { q: "Có đưa danh sách phim muốn xem lên vòng quay được không?", a: "Được. Chép tên phim vào Dán nhiều, mỗi dòng một phim. Vòng quay chứa tới 1.000 phim." },
      { q: "Có vòng quay riêng cho Netflix không?", a: "Hãy thử mẫu Chọn thể loại Netflix, dùng các danh mục duyệt phim phổ biến. WhirlPick không liên kết với Netflix." },
      { q: "Làm sao tránh chọn phim đã xem?", a: "Dùng chế độ Loại trừ, hoặc bấm biểu tượng con mắt để ẩn phim đã xem." },
    ],
  },
};
